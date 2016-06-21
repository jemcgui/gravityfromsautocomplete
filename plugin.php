<?php
/**
 * @package   Gravity_Forms_Autocomplete
 * @author    Justin McGuire
 * @license   GPL-2.0+
 * @link      
 * @copyright 2016
 *
 * @wordpress-plugin
 * Plugin Name:       Gravity Forms CSS Autocomplete
 * Plugin URI:        
 * Description:       Adds a css selector option to gravity forms css class fields
 * Version:           1.0.0
 * Author:            Justin McGuire
 * Author URI:        
 * Text Domain:       gf-autocomplete
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /lang
 * GitHub Plugin URI: 
 */
 
 // Prevent direct file access
if ( ! defined ( 'ABSPATH' ) ) {
	exit;
}

class GF_Autocomplete {

	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'gf_autocomplete_enqueue' ) );
	}

	
	public function gf_autocomplete_enqueue($hook) {
		wp_enqueue_script( 'ajax-script', plugins_url( '/js/gf_autocomplete.js', __FILE__ ), array('jquery'),'1.0.0', true );

		wp_register_style( 'gf_autocomplete_css', plugins_url( '/css/gf_autocomplete-style.css', __FILE__ ), false, '1.0.0' );
		wp_enqueue_style( 'gf_autocomplete_css' );	
	}

	//Add option hide field label
	//add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );
}
$GF_Autocomplete = new GF_Autocomplete();