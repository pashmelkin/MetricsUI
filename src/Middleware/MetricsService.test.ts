import {MetricService} from "./MetricsService";


test('MetricsService', () => {
    var expected = [{"commit": "one", "date": "two"}, {"commit": "one", "date": "two"}];
    var res = MetricService("cardId", "some-repo");

    expect(res).toEqual(expected);
});
