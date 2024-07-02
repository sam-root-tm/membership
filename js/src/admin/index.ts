import app from 'flarum/admin/app';

app.initializers.add('vendor/membership', () => {
  console.log('[vendor/membership] Hello, admin!');
});
