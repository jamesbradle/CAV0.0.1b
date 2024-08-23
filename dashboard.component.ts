import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service';

interface UnitData {
  unitNumber: string;
  unitType: string;
  views: number;
  users: number;
  viewsPerUser: number;
  avgEngagementTime: number;
  eventCount: number;
  sizeScore: number;
  featured: boolean;
  pinned: boolean;
  rank: number;
  availability: string;
}

interface UnitTypeData {
  views: number;
  users: number;
  units: UnitData[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  startDate: string = '2024-04-06';
  endDate: string = '2024-06-29';
  selectedUnitType: string = 'All';
  analyticsSummary: any = {
    users: 0,
    totalViews: 0,
    engagementTime: 0,
    conversions: 55,
  };
  unitTypeData: { [key: string]: UnitTypeData } = {
    All: { views: 0, users: 0, units: [] },
    Studio: { views: 0, users: 0, units: [] },
    Alcove: { views: 0, users: 0, units: [] },
    '1-Beds': { views: 0, users: 0, units: [] },
    '2-Beds': { views: 0, users: 0, units: [] },
    '3-Beds': { views: 0, users: 0, units: [] },
  };
  maxSizeScore: number = 0;
  minSizeScore: number = Infinity;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.googleAnalyticsService
      .fetchUnitTypeData(this.startDate, this.endDate)
      .subscribe({
        next: (data) => {
          if (data && data.rows) {
            this.processData(data.rows);
          } else {
            console.error('No data in API response:', data);
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }

  processData(rows: any[]) {
    this.resetData();

    rows.forEach((row) => {
      const path = row.dimensionValues[0].value;
      const views = parseInt(row.metricValues[0].value);
      const users = parseInt(row.metricValues[1].value);
      const viewsPerUser = parseFloat(row.metricValues[2].value);
      const avgEngagementTime = parseFloat(row.metricValues[3].value);
      const eventCount = parseInt(row.metricValues[4].value);

      const unitType = this.getUnitType(path);
      const unitNumber = this.getUnitNumber(path);

      if (unitType && unitNumber) {
        const sizeScore = this.calculateSizeScore(views, users, eventCount);
        this.updateUnitTypeData(
          unitType,
          unitNumber,
          views,
          users,
          viewsPerUser,
          avgEngagementTime,
          eventCount,
          sizeScore
        );
      }

      this.analyticsSummary.totalViews += views;
      this.analyticsSummary.engagementTime += avgEngagementTime * users;
    });

    this.analyticsSummary.users = this.unitTypeData['All'].users;
    this.calculateEngagementHealth();
    this.sortAndRankUnits();
    console.log('Processed data:', this.unitTypeData);
    console.log('Analytics summary:', this.analyticsSummary);
  }

  resetData() {
    Object.keys(this.unitTypeData).forEach((key) => {
      this.unitTypeData[key] = { views: 0, users: 0, units: [] };
    });
    this.analyticsSummary.users = 0;
    this.analyticsSummary.totalViews = 0;
    this.analyticsSummary.engagementTime = 0;
    this.maxSizeScore = 0;
    this.minSizeScore = Infinity;
  }

  getUnitType(path: string): string {
    if (path.includes('studios')) return 'Studio';
    if (path.includes('alcoves')) return 'Alcove';
    if (path.includes('1beds')) return '1-Beds';
    if (path.includes('2beds')) return '2-Beds';
    if (path.includes('3beds')) return '3-Beds';
    return 'Other';
  }

  getUnitNumber(path: string): string | null {
    const match = path.match(/\/(\d+)$/);
    return match ? match[1] : null;
  }

  calculateSizeScore(views: number, users: number, eventCount: number): number {
    return views + users + eventCount;
  }

  updateUnitTypeData(
    unitType: string,
    unitNumber: string,
    views: number,
    users: number,
    viewsPerUser: number,
    avgEngagementTime: number,
    eventCount: number,
    sizeScore: number
  ) {
    this.unitTypeData[unitType].views += views;
    this.unitTypeData[unitType].users += users;

    const existingAllUnit = this.unitTypeData['All'].units.find(
      (u) => u.unitNumber === unitNumber && u.unitType === unitType
    );
    if (!existingAllUnit) {
      this.unitTypeData['All'].views += views;
      this.unitTypeData['All'].users += users;
    }

    const unitData: UnitData = {
      unitNumber,
      unitType,
      views,
      users,
      viewsPerUser,
      avgEngagementTime,
      eventCount,
      sizeScore,
      featured: false,
      pinned: false,
      rank: 0,
      availability: this.getRandomAvailability(),
    };

    const existingUnitIndex = this.unitTypeData[unitType].units.findIndex(
      (u) => u.unitNumber === unitNumber
    );
    if (existingUnitIndex !== -1) {
      unitData.featured =
        this.unitTypeData[unitType].units[existingUnitIndex].featured;
      unitData.pinned =
        this.unitTypeData[unitType].units[existingUnitIndex].pinned;
      this.unitTypeData[unitType].units[existingUnitIndex] = unitData;
    } else {
      this.unitTypeData[unitType].units.push(unitData);
    }

    const existingAllIndex = this.unitTypeData['All'].units.findIndex(
      (u) => u.unitNumber === unitNumber && u.unitType === unitType
    );
    if (existingAllIndex !== -1) {
      unitData.featured =
        this.unitTypeData['All'].units[existingAllIndex].featured;
      unitData.pinned = this.unitTypeData['All'].units[existingAllIndex].pinned;
      this.unitTypeData['All'].units[existingAllIndex] = unitData;
    } else {
      this.unitTypeData['All'].units.push(unitData);
    }

    if (sizeScore > this.maxSizeScore) {
      this.maxSizeScore = sizeScore;
    }
    if (sizeScore < this.minSizeScore) {
      this.minSizeScore = sizeScore;
    }
  }

  getRandomAvailability(): string {
    const availabilities = [
      'Now',
      'Next 30 days',
      'Next 60 Days',
      'Next 90 Days',
    ];
    return availabilities[Math.floor(Math.random() * availabilities.length)];
  }

  calculateEngagementHealth() {
    const totalUsers = this.analyticsSummary.users;
    if (totalUsers > 0) {
      const avgEngagementTime =
        this.analyticsSummary.engagementTime / totalUsers;
      this.analyticsSummary.engagementTime =
        Math.round((avgEngagementTime / 60) * 100) / 100;
    }
  }

  getCardSize(sizeScore: number): string {
    const minSize = 150; // Minimum card size in pixels
    const maxSize = 300; // Maximum card size in pixels
    const sizeRange = this.maxSizeScore - this.minSizeScore;
    const sizePercentage = (sizeScore - this.minSizeScore) / sizeRange;
    const size = minSize + sizePercentage * (maxSize - minSize);
    return `${Math.round(size)}px`;
  }

  getUnitTypeColor(unitType: string): string {
    switch (unitType) {
      case 'Studio':
        return '#FFA500';
      case 'Alcove':
        return '#4B0082';
      case '1-Beds':
        return '#008000';
      case '2-Beds':
        return '#0000FF';
      case '3-Beds':
        return '#800080';
      default:
        return '#808080';
    }
  }

  onUnitTypeChange(unitType: string) {
    this.selectedUnitType = unitType;
    this.sortAndRankUnits();
  }

  onDateChange() {
    this.fetchData();
  }

  featureUnit(unit: UnitData) {
    unit.featured = !unit.featured;
    this.sortAndRankUnits();
  }

  pinUnit(unit: UnitData) {
    // Unpin all units first
    Object.values(this.unitTypeData).forEach((typeData) => {
      typeData.units.forEach((u) => (u.pinned = false));
    });
    // Pin the selected unit
    unit.pinned = true;
    this.sortAndRankUnits();
  }

  sortAndRankUnits() {
    Object.values(this.unitTypeData).forEach((typeData) => {
      typeData.units.sort((a, b) => {
        if (a.pinned) return -1;
        if (b.pinned) return 1;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.sizeScore - a.sizeScore;
      });

      typeData.units.forEach((unit, index) => {
        unit.rank = index + 1;
      });
    });
  }

  viewUnit(unitNumber: string, unitType: string) {
    // This is a placeholder function for the "View Unit" button
    console.log(`Viewing unit ${unitNumber} of type ${unitType}`);
    // In a real application, you would navigate to the unit's page here
  }
}
