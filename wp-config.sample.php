<?php
/**
 * The base configuration for WordPress
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'CHANGE_ME' );

/** Database username */
define( 'DB_USER', 'CHANGE_ME' );

/** Database password */
define( 'DB_PASSWORD', 'CHANGE_ME' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 * Gere valores novos em https://api.wordpress.org/secret-key/1.1/salt/
 * NUNCA reutilize os valores deste arquivo de exemplo em produção.
 */
define('AUTH_KEY',         'CHANGE_ME');
define('SECURE_AUTH_KEY',  'CHANGE_ME');
define('LOGGED_IN_KEY',    'CHANGE_ME');
define('NONCE_KEY',        'CHANGE_ME');
define('AUTH_SALT',        'CHANGE_ME');
define('SECURE_AUTH_SALT', 'CHANGE_ME');
define('LOGGED_IN_SALT',   'CHANGE_ME');
define('NONCE_SALT',       'CHANGE_ME');

/**#@-*/

/**
 * WordPress database table prefix.
 */
$table_prefix = 'wp64_';

/**
 * For developers: WordPress debugging mode.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

/* Add any custom values between this line and the "stop editing" line. */

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings

define('WP_CACHE', true);
define('FORCE_SSL_ADMIN', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
