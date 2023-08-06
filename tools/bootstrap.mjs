import shell from 'shelljs';

shell.exec('npx degit --force wordpress/wordpress#5.9.5 .wordpress')

shell.cp('.wordpress/wp-includes/images/w-logo-blue-white-bg.png', 'static/favicon.png');

shell.mkdir('-p', 'static/wp-includes/css');
shell.cp('.wordpress/wp-includes/css/dashicons.min.css', 'static/wp-includes/css/dashicons.min.css');
shell.cp('.wordpress/wp-includes/css/buttons.min.css', 'static/wp-includes/css/buttons.min.css');

shell.mkdir('-p', 'static/wp-admin/css');
shell.cp('.wordpress/wp-admin/css/forms.min.css', 'static/wp-admin/css/forms.min.css');
shell.cp('.wordpress/wp-admin/css/l10n.min.css', 'static/wp-admin/css/l10n.min.css');
shell.cp('.wordpress/wp-admin/css/login.min.css', 'static/wp-admin/css/login.min.css');

shell.mkdir('-p', 'static/wp-admin/images');
shell.cp('.wordpress/wp-admin/images/w-logo-blue.png', 'static/wp-admin/images/w-logo-blue.png');
shell.cp('.wordpress/wp-admin/images/wordpress-logo.svg', 'static/wp-admin/images/wordpress-logo.svg');
