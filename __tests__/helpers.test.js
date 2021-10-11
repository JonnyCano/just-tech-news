// before you can run the test, you'll need to import the format_date() function:
const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020')
})

test('format_plural() returns properly pluralized words', () => {
    const singular = 'Lion'
    const lion = 1
    const plural = 'Tiger'
    const tiger = 2

    expect(format_plural(singular, lion)).toBe('Lion');
    expect(format_plural(plural, tiger)).toBe('Tigers');
})

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});