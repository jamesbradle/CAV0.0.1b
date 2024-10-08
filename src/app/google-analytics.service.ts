import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private analyticsData = [
    {path: '/', views: 6102, users: 2201, viewsPerUser: 2.772376192639709, avgEngagementTime: 29.622444343480236, eventCount: 17345, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds', views: 2602, users: 1017, viewsPerUser: 2.5585054080629304, avgEngagementTime: 41.38053097345133, eventCount: 3791, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds', views: 2445, users: 933, viewsPerUser: 2.620578778135048, avgEngagementTime: 46.162915326902464, eventCount: 3145, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves', views: 1553, users: 601, viewsPerUser: 2.584026622296173, avgEngagementTime: 37.06655574043261, eventCount: 1835, keyEvents: 0, totalRevenue: 0},
    {path: '/studios', views: 1270, users: 503, viewsPerUser: 2.524850894632207, avgEngagementTime: 36.97813121272366, eventCount: 1566, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds', views: 1007, users: 516, viewsPerUser: 1.9515503875968991, avgEngagementTime: 34.71124031007752, eventCount: 1400, keyEvents: 0, totalRevenue: 0},
    {path: '/contact', views: 892, users: 459, viewsPerUser: 1.943355119825708, avgEngagementTime: 41.888888888888886, eventCount: 2196, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/529', views: 840, users: 339, viewsPerUser: 2.47787610619469, avgEngagementTime: 40.4306784660767, eventCount: 965, keyEvents: 0, totalRevenue: 0},
    {path: '/favorites', views: 738, users: 288, viewsPerUser: 2.5625, avgEngagementTime: 24.56597222222222, eventCount: 1115, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/525', views: 688, users: 275, viewsPerUser: 2.501818181818182, avgEngagementTime: 31.06909090909091, eventCount: 838, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/629', views: 623, users: 291, viewsPerUser: 2.140893470790378, avgEngagementTime: 43.94845360824742, eventCount: 791, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/517', views: 583, users: 190, viewsPerUser: 3.068421052631579, avgEngagementTime: 34.05789473684211, eventCount: 701, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/425', views: 489, users: 189, viewsPerUser: 2.5873015873015874, avgEngagementTime: 35.93650793650794, eventCount: 564, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/204', views: 468, users: 237, viewsPerUser: 1.9746835443037976, avgEngagementTime: 28.282700421940927, eventCount: 502, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/206', views: 432, users: 195, viewsPerUser: 2.2153846153846155, avgEngagementTime: 20.682051282051283, eventCount: 476, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/632', views: 345, users: 176, viewsPerUser: 1.9602272727272727, avgEngagementTime: 28.125, eventCount: 450, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/208', views: 292, users: 137, viewsPerUser: 2.1313868613138687, avgEngagementTime: 18.67153284671533, eventCount: 311, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/320', views: 290, users: 132, viewsPerUser: 2.196969696969697, avgEngagementTime: 22.704545454545453, eventCount: 322, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/330', views: 288, users: 121, viewsPerUser: 2.3801652892561984, avgEngagementTime: 24.710743801652892, eventCount: 325, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/617', views: 285, users: 117, viewsPerUser: 2.4358974358974357, avgEngagementTime: 27.05982905982906, eventCount: 319, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/202', views: 256, users: 137, viewsPerUser: 1.8686131386861313, avgEngagementTime: 25.861313868613138, eventCount: 304, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/625', views: 256, users: 117, viewsPerUser: 2.1880341880341883, avgEngagementTime: 27.22222222222222, eventCount: 298, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/542', views: 242, users: 101, viewsPerUser: 2.396039603960396, avgEngagementTime: 41.97029702970297, eventCount: 286, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/415', views: 235, users: 79, viewsPerUser: 2.9746835443037973, avgEngagementTime: 42.79746835443038, eventCount: 304, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/302', views: 235, users: 139, viewsPerUser: 1.6906474820143884, avgEngagementTime: 26.942446043165468, eventCount: 302, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/333', views: 228, users: 107, viewsPerUser: 2.130841121495327, avgEngagementTime: 31.33644859813084, eventCount: 246, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/637', views: 223, users: 113, viewsPerUser: 1.9734513274336283, avgEngagementTime: 38.230088495575224, eventCount: 272, keyEvents: 0, totalRevenue: 0},
    {path: '/confirmation', views: 219, users: 157, viewsPerUser: 1.394904458598726, avgEngagementTime: 78.53503184713375, eventCount: 392, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/205', views: 197, users: 63, viewsPerUser: 3.126984126984127, avgEngagementTime: 43.55555555555556, eventCount: 259, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/337', views: 194, users: 106, viewsPerUser: 1.830188679245283, avgEngagementTime: 23.29245283018868, eventCount: 207, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/341', views: 190, users: 86, viewsPerUser: 2.2093023255813953, avgEngagementTime: 35.58139534883721, eventCount: 233, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/520', views: 177, users: 109, viewsPerUser: 1.6238532110091743, avgEngagementTime: 35.77981651376147, eventCount: 257, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/623', views: 174, users: 82, viewsPerUser: 2.1219512195121952, avgEngagementTime: 28.0609756097561, eventCount: 220, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/420', views: 162, users: 91, viewsPerUser: 1.7802197802197801, avgEngagementTime: 35.42857142857143, eventCount: 184, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/319', views: 160, users: 57, viewsPerUser: 2.807017543859649, avgEngagementTime: 32.280701754385966, eventCount: 245, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/620', views: 159, users: 71, viewsPerUser: 2.23943661971831, avgEngagementTime: 35.183098591549296, eventCount: 206, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/522', views: 157, users: 76, viewsPerUser: 2.0657894736842106, avgEngagementTime: 19.75, eventCount: 183, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/322', views: 156, users: 53, viewsPerUser: 2.943396226415094, avgEngagementTime: 33.943396226415096, eventCount: 195, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/304', views: 151, users: 82, viewsPerUser: 1.8414634146341464, avgEngagementTime: 27.829268292682926, eventCount: 176, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/631', views: 149, users: 64, viewsPerUser: 2.328125, avgEngagementTime: 43.28125, eventCount: 199, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/303', views: 149, users: 75, viewsPerUser: 1.9866666666666666, avgEngagementTime: 18.533333333333335, eventCount: 156, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/430', views: 146, users: 60, viewsPerUser: 2.433333333333333, avgEngagementTime: 32.06666666666667, eventCount: 194, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/428', views: 135, users: 71, viewsPerUser: 1.9014084507042253, avgEngagementTime: 17.43661971830986, eventCount: 153, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/633', views: 134, users: 68, viewsPerUser: 1.9705882352941178, avgEngagementTime: 32.63235294117647, eventCount: 158, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/515', views: 131, users: 50, viewsPerUser: 2.62, avgEngagementTime: 22.4, eventCount: 152, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/305', views: 118, users: 65, viewsPerUser: 1.8153846153846154, avgEngagementTime: 15.8, eventCount: 129, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/326', views: 116, users: 49, viewsPerUser: 2.36734693877551, avgEngagementTime: 26.79591836734694, eventCount: 128, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/524', views: 116, users: 56, viewsPerUser: 2.0714285714285716, avgEngagementTime: 15.946428571428571, eventCount: 137, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/624', views: 116, users: 50, viewsPerUser: 2.32, avgEngagementTime: 25.98, eventCount: 139, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/641', views: 110, users: 51, viewsPerUser: 2.156862745098039, avgEngagementTime: 39.35294117647059, eventCount: 129, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/328', views: 108, users: 46, viewsPerUser: 2.347826086956522, avgEngagementTime: 20.58695652173913, eventCount: 114, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/306', views: 107, users: 59, viewsPerUser: 1.8135593220338984, avgEngagementTime: 37.79661016949152, eventCount: 115, keyEvents: 0, totalRevenue: 0},
    {path: '/studios/622', views: 105, users: 48, viewsPerUser: 2.1875, avgEngagementTime: 24.395833333333332, eventCount: 120, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/437', views: 98, users: 58, viewsPerUser: 1.6896551724137931, avgEngagementTime: 19.74137931034483, eventCount: 102, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/325', views: 97, users: 48, viewsPerUser: 2.0208333333333335, avgEngagementTime: 24.375, eventCount: 115, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/541', views: 79, users: 47, viewsPerUser: 1.6808510638297873, avgEngagementTime: 41.234042553191486, eventCount: 95, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/307', views: 78, users: 44, viewsPerUser: 1.7727272727272727, avgEngagementTime: 10.409090909090908, eventCount: 83, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/530', views: 72, users: 43, viewsPerUser: 1.6744186046511629, avgEngagementTime: 32, eventCount: 80, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/308', views: 72, users: 38, viewsPerUser: 1.894736842105263, avgEngagementTime: 13.552631578947368, eventCount: 86, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/433', views: 71, users: 38, viewsPerUser: 1.868421052631579, avgEngagementTime: 28.973684210526315, eventCount: 77, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/203', views: 71, users: 24, viewsPerUser: 2.9583333333333335, avgEngagementTime: 70.375, eventCount: 122, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/601', views: 64, users: 23, viewsPerUser: 2.782608695652174, avgEngagementTime: 69.56521739130434, eventCount: 84, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/309', views: 61, users: 36, viewsPerUser: 1.6944444444444444, avgEngagementTime: 9.5, eventCount: 64, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/636', views: 55, users: 26, viewsPerUser: 2.1153846153846154, avgEngagementTime: 38.84615384615385, eventCount: 67, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/533', views: 50, users: 32, viewsPerUser: 1.5625, avgEngagementTime: 28.40625, eventCount: 60, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/311', views: 47, users: 29, viewsPerUser: 1.6206896551724137, avgEngagementTime: 14.310344827586206, eventCount: 55, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/537', views: 46, users: 32, viewsPerUser: 1.4375, avgEngagementTime: 20.9375, eventCount: 54, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/526', views: 45, users: 35, viewsPerUser: 1.2857142857142858, avgEngagementTime: 22.085714285714285, eventCount: 51, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/312', views: 44, users: 29, viewsPerUser: 1.5172413793103448, avgEngagementTime: 11, eventCount: 47, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/643', views: 43, users: 36, viewsPerUser: 1.1944444444444444, avgEngagementTime: 62.361111111111114, eventCount: 51, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/310', views: 39, users: 24, viewsPerUser: 1.625, avgEngagementTime: 12.666666666666666, eventCount: 40, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/426', views: 35, users: 27, viewsPerUser: 1.2962962962962963, avgEngagementTime: 15.62962962962963, eventCount: 46, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/528', views: 35, users: 31, viewsPerUser: 1.1290322580645162, avgEngagementTime: 14.935483870967742, eventCount: 36, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/314', views: 35, users: 27, viewsPerUser: 1.2962962962962963, avgEngagementTime: 20, eventCount: 38, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/441', views: 32, users: 19, viewsPerUser: 1.6842105263157894, avgEngagementTime: 28.157894736842106, eventCount: 33, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/201', views: 32, users: 17, viewsPerUser: 1.8823529411764706, avgEngagementTime: 73.52941176470588, eventCount: 53, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/417', views: 32, users: 14, viewsPerUser: 2.2857142857142856, avgEngagementTime: 30, eventCount: 40, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/313', views: 30, users: 21, viewsPerUser: 1.4285714285714286, avgEngagementTime: 11.476190476190476, eventCount: 36, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/343', views: 30, users: 22, viewsPerUser: 1.3636363636363635, avgEngagementTime: 23.181818181818183, eventCount: 36, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/315', views: 28, users: 10, viewsPerUser: 2.8, avgEngagementTime: 43.2, eventCount: 50, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/207', views: 26, users: 9, viewsPerUser: 2.888888888888889, avgEngagementTime: 106.22222222222223, eventCount: 45, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/640', views: 25, users: 18, viewsPerUser: 1.3888888888888888, avgEngagementTime: 16.22222222222222, eventCount: 32, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/335', views: 23, users: 17, viewsPerUser: 1.3529411764705883, avgEngagementTime: 31.176470588235293, eventCount: 23, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/523', views: 20, users: 14, viewsPerUser: 1.4285714285714286, avgEngagementTime: 11.285714285714286, eventCount: 21, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/642', views: 18, users: 14, viewsPerUser: 1.2857142857142858, avgEngagementTime: 39.214285714285715, eventCount: 21, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/616', views: 18, users: 12, viewsPerUser: 1.5, avgEngagementTime: 22.333333333333332, eventCount: 26, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/316', views: 15, users: 15, viewsPerUser: 1, avgEngagementTime: 3.4, eventCount: 15, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/318', views: 15, users: 12, viewsPerUser: 1.25, avgEngagementTime: 10.833333333333334, eventCount: 16, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/339', views: 15, users: 12, viewsPerUser: 1.25, avgEngagementTime: 8.75, eventCount: 18, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/340', views: 15, users: 11, viewsPerUser: 1.3636363636363635, avgEngagementTime: 29.545454545454547, eventCount: 15, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/402', views: 15, users: 11, viewsPerUser: 1.3636363636363635, avgEngagementTime: 20.90909090909091, eventCount: 17, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/403', views: 15, users: 9, viewsPerUser: 1.6666666666666667, avgEngagementTime: 28, eventCount: 16, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/506', views: 14, users: 10, viewsPerUser: 1.4, avgEngagementTime: 24.4, eventCount: 19, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/604', views: 14, users: 7, viewsPerUser: 2, avgEngagementTime: 50.857142857142854, eventCount: 33, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/410', views: 13, users: 11, viewsPerUser: 1.1818181818181819, avgEngagementTime: 9.363636363636363, eventCount: 13, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/639', views: 12, users: 11, viewsPerUser: 1.0909090909090908, avgEngagementTime: 12.636363636363637, eventCount: 13, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/405', views: 11, users: 8, viewsPerUser: 1.375, avgEngagementTime: 15.375, eventCount: 11, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/618', views: 11, users: 9, viewsPerUser: 1.2222222222222223, avgEngagementTime: 12.777777777777779, eventCount: 13, keyEvents: 0, totalRevenue: 0},
    {path: '/privacypolicy', views: 11, users: 6, viewsPerUser: 1.8333333333333333, avgEngagementTime: 22.666666666666668, eventCount: 21, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/408', views: 10, users: 8, viewsPerUser: 1.25, avgEngagementTime: 27.5, eventCount: 14, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/409', views: 10, users: 8, viewsPerUser: 1.25, avgEngagementTime: 14, eventCount: 12, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/443', views: 10, users: 6, viewsPerUser: 1.6666666666666667, avgEngagementTime: 12.833333333333334, eventCount: 13, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/614', views: 10, users: 6, viewsPerUser: 1.6666666666666667, avgEngagementTime: 24.833333333333332, eventCount: 14, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/635', views: 10, users: 8, viewsPerUser: 1.25, avgEngagementTime: 22.875, eventCount: 18, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/615', views: 9, users: 5, viewsPerUser: 1.8, avgEngagementTime: 55.6, eventCount: 15, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/411', views: 9, users: 9, viewsPerUser: 1, avgEngagementTime: 7.333333333333333, eventCount: 9, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/435', views: 9, users: 6, viewsPerUser: 1.5, avgEngagementTime: 25, eventCount: 10, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/535', views: 9, users: 6, viewsPerUser: 1.5, avgEngagementTime: 197.16666666666666, eventCount: 15, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/602', views: 9, users: 4, viewsPerUser: 2.25, avgEngagementTime: 28.25, eventCount: 12, keyEvents: 0, totalRevenue: 0},
    {path: '/favorites-2', views: 8, users: 1, viewsPerUser: 8, avgEngagementTime: 0, eventCount: 17, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/407', views: 7, users: 7, viewsPerUser: 1, avgEngagementTime: 7, eventCount: 9, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/412', views: 7, users: 4, viewsPerUser: 1.75, avgEngagementTime: 14, eventCount: 7, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/413', views: 7, users: 6, viewsPerUser: 1.1666666666666667, avgEngagementTime: 22, eventCount: 7, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/404', views: 6, users: 6, viewsPerUser: 1, avgEngagementTime: 25, eventCount: 6, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/406', views: 6, users: 3, viewsPerUser: 2, avgEngagementTime: 58, eventCount: 8, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/414', views: 6, users: 6, viewsPerUser: 1, avgEngagementTime: 9, eventCount: 6, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/439', views: 6, users: 6, viewsPerUser: 1, avgEngagementTime: 13.166666666666666, eventCount: 8, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/518', views: 6, users: 5, viewsPerUser: 1.2, avgEngagementTime: 15.4, eventCount: 6, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/608', views: 6, users: 5, viewsPerUser: 1.2, avgEngagementTime: 24.4, eventCount: 6, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/611', views: 6, users: 5, viewsPerUser: 1.2, avgEngagementTime: 35.6, eventCount: 8, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/630', views: 5, users: 5, viewsPerUser: 1, avgEngagementTime: 22, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/606', views: 5, users: 4, viewsPerUser: 1.25, avgEngagementTime: 26, eventCount: 7, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/609', views: 5, users: 3, viewsPerUser: 1.6666666666666667, avgEngagementTime: 30, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/442', views: 4, users: 4, viewsPerUser: 1, avgEngagementTime: 72.25, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/634', views: 4, users: 1, viewsPerUser: 4, avgEngagementTime: 121, eventCount: 8, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/416', views: 4, users: 3, viewsPerUser: 1.3333333333333333, avgEngagementTime: 12.333333333333334, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/440', views: 4, users: 4, viewsPerUser: 1, avgEngagementTime: 3.5, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/504', views: 4, users: 2, viewsPerUser: 2, avgEngagementTime: 31, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/505', views: 4, users: 3, viewsPerUser: 1.3333333333333333, avgEngagementTime: 20, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/509', views: 4, users: 3, viewsPerUser: 1.3333333333333333, avgEngagementTime: 79.33333333333333, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/512', views: 4, users: 4, viewsPerUser: 1, avgEngagementTime: 41.75, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/613', views: 4, users: 4, viewsPerUser: 1, avgEngagementTime: 18, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/628', views: 3, users: 3, viewsPerUser: 1, avgEngagementTime: 8, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/342', views: 3, users: 2, viewsPerUser: 1.5, avgEngagementTime: 16.5, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/418', views: 3, users: 3, viewsPerUser: 1, avgEngagementTime: 27, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/503', views: 3, users: 2, viewsPerUser: 1.5, avgEngagementTime: 17, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/507', views: 3, users: 2, viewsPerUser: 1.5, avgEngagementTime: 20, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/514', views: 3, users: 3, viewsPerUser: 1, avgEngagementTime: 12, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/516', views: 3, users: 3, viewsPerUser: 1, avgEngagementTime: 9.666666666666666, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/605', views: 3, users: 3, viewsPerUser: 1, avgEngagementTime: 4, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/607', views: 3, users: 2, viewsPerUser: 1.5, avgEngagementTime: 32.5, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/626', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 7.5, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/638', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 15.5, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/300', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 22, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/544', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 15, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/627', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 15, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/502', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 3.5, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/508', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 13, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/510', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 8.5, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/539', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 10, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/540', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 12.5, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/543', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 8, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/603', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 16, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/610', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 17, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/612', views: 2, users: 2, viewsPerUser: 1, avgEngagementTime: 6, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/favorites/322', views: 2, users: 1, viewsPerUser: 2, avgEngagementTime: 4, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/1beds/323', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 1, eventCount: 3, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/344', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 22, eventCount: 1, keyEvents: 0, totalRevenue: 0},
    {path: '/2beds/531', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 17, eventCount: 2, keyEvents: 0, totalRevenue: 0},
    {path: '/3beds/200', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 2, eventCount: 4, keyEvents: 0, totalRevenue: 0},
    {path: '/alcoves/513', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 21, eventCount: 1, keyEvents: 0, totalRevenue: 0},
    {path: '/favorites/418', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 1, eventCount: 5, keyEvents: 0, totalRevenue: 0},
    {path: '/favorites/525', views: 1, users: 1, viewsPerUser: 1, avgEngagementTime: 19, eventCount: 3, keyEvents: 0, totalRevenue: 0}
  ];

  constructor() { }

  fetchUnitTypeData(startDate: string, endDate: string): Observable<any> {
    return of({
      rows: this.analyticsData.map(item => ({
        dimensionValues: [{ value: item.path }],
        metricValues: [
          { value: item.views.toString() },
          { value: item.users.toString() },
          { value: item.viewsPerUser.toString() },
          { value: item.avgEngagementTime.toString() },
          { value: item.eventCount.toString() }
        ]
      }))
    });
  }
}