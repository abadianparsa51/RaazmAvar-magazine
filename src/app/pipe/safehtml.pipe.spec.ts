import { SafeHtmlPipe } from './safehtml.pipe';

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeHtmlPipe('');
    expect(pipe).toBeTruthy();
  });
});
