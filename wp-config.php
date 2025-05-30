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
define( 'DB_NAME', 'comu5801_wp283' );

/** Database username */
define( 'DB_USER', 'comu5801_wp283' );

/** Database password */
define( 'DB_PASSWORD', '{n[lFbx&+aX*' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 * Você pode gerar estas usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ serviço de chaves-secretas do WordPress.org}
 */
define('AUTH_KEY',         'Ey3Kj#m9X$vN&p2L*w5Q!c8Z@h4R');
define('SECURE_AUTH_KEY',  'F6B#n9M$x2P@j5L&w8Q!c4Z*h7R');
define('LOGGED_IN_KEY',    'G7C#p2M$x5N@k8L&w3Q!z6Z*h9R');
define('NONCE_KEY',        'H8D#q3M$x6P@m9L&w4Q!a7Z*k2R');
define('AUTH_SALT',        'J9E#r4M$x7N@n2L&w5Q!b8Z*m3R');
define('SECURE_AUTH_SALT', 'K2F#s5M$x8P@p3L&w6Q!c9Z*n4R');
define('LOGGED_IN_SALT',   'L3G#t6M$x9N@q4L&w7Q!d2Z*p5R');
define('NONCE_SALT',       'M4H#u7M$x2P@r5L&w8Q!e3Z*q6R');

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