// Configurar CORS para a API REST
function add_cors_headers() {
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        return $value;
    });
}
add_action('rest_api_init', 'add_cors_headers');

// Registrar Custom Post Type Certificado
function register_certificado_post_type() {
    register_post_type('certificado', array(
        'labels' => array(
            'name' => 'Certificados',
            'singular_name' => 'Certificado'
        ),
        'public' => true,
        'show_in_rest' => true, // Importante para a API REST
        'rest_base' => 'certificado', // Define o endpoint na API
        'supports' => array('title', 'editor', 'custom-fields'),
        'show_in_menu' => true,
    ));
}
add_action('init', 'register_certificado_post_type'); 