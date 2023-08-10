import { dirname, resolve } from 'node:path';
import shell from 'shelljs';

const sourcePath = resolve(process.cwd(), 'node_modules', '.wordpress');
const destinationPath = resolve(process.cwd(), 'static');

const files = [
  {
    src: 'wp-includes/images/w-logo-blue-white-bg.png',
    dest: 'favicon.png'
  },
  'wp-includes/css/dashicons.min.css',
  'wp-includes/css/buttons.min.css',
  'wp-admin/css/forms.min.css',
  'wp-admin/css/l10n.min.css',
  'wp-admin/css/login.min.css',
  'wp-admin/images/w-logo-blue.png',
  'wp-admin/images/wordpress-logo.svg'
];

main();

function main() {
  shell.exec(`npx degit --force wordpress/wordpress#5.9.7 ${sourcePath}`);

  files.map(file => {
    const src = resolve(sourcePath, file.src || file);
    const dest = resolve(destinationPath, file.dest || file);
    const parentDir = dirname(dest);

    console.time(`> create static/${file.dest || file}`);
      shell.mkdir(`-p`, parentDir);
      shell.cp(src, dest);
    console.timeEnd(`> create static/${file.dest || file}`);
  });
}
