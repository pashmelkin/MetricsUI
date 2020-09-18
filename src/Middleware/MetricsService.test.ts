import {MetricService} from "./MetricsService";


test('MetricsService', () => {
    const expected = [{"commit": "one", "date": "two"}, {"commit": "one", "date": "two"}];
    const res = MetricService("cardId", "some-repo");
    expect(res).toEqual(expected);
});
