<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecuturismodb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'a%oiqMzB? L62DyvVJdrE;k -q]mRR.`BIez~3{M-2$zS>Tw992iMqC}C1#?6ru9' );
define( 'SECURE_AUTH_KEY',  '&(cu1!KEPX6(W&4PL|!#Nc5Q]N%;#ct)Kb@s)I9>g2EKRl{h7o:2p8^jL{hT[EU#' );
define( 'LOGGED_IN_KEY',    'K+i<,d1M2(X;kN49m!~>(x*qpX]6]<gw9?#D{W~[>PW`YX|~/w}Z:175_?a#-lI>' );
define( 'NONCE_KEY',        '*doPK*j^%A06klzkOWsk[:`L<%#XdP Z^5/Zl9mq[IDf_pPJF1LZ)@]>5}zC/~{&' );
define( 'AUTH_SALT',        '/#%e$Y:ndu4vKz22;MIx%7%!yT|{ul8pAtUEn7I3T;8p5-~}2R052|H_Aq)J}NK(' );
define( 'SECURE_AUTH_SALT', 'fmXm^{C@)dw_Z>4R|V-:_v3?EK6<s12FtAMi<*Y4/g8Zb3e56&0/S;-lH8*N&eky' );
define( 'LOGGED_IN_SALT',   '[H;Am7vp<5<qK`5#^YhIrCS`(4?qE+31$+$^X@,q6Y]Vnp<Bv{2e lN}`}NsV]f2' );
define( 'NONCE_SALT',       'd/USiPy8oC@@c%W:Hwb~D!KNSYW;TSb0;WmU|wx$NysC,(-vcS`>k$v4c+$Q~-`+' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'serieword_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
