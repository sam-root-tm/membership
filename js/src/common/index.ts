import app from 'flarum/common/app';

app.initializers.add('vendor/membership', () => {
  console.log('[vendor/membership] Hello, forum and admin!');
});
