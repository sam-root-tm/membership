import app from 'flarum/forum/app';

app.initializers.add('vendor/membership', () => {
  console.log('[vendor/membership] Hello, forum!');
});
