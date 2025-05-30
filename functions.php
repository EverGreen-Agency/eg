function registrar_post_type_certificado() {
    register_post_type('certificado', [
        'labels' => [
            'name' => 'Certificados',
            'singular_name' => 'Certificado'
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'certificado',
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-awards'
    ]);
}
add_action('init', 'registrar_post_type_certificado');

function registrar_post_type_autoridade() {
    register_post_type('autoridade', [
        'labels' => [
            'name' => 'Autoridade',
            'singular_name' => 'Autoridade'
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'autoridade',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'menu_icon' => 'dashicons-welcome-learn-more',
        'has_archive' => true,
        'rewrite' => ['slug' => 'autoridade']
    ]);
}
add_action('init', 'registrar_post_type_autoridade');

// Remove todos os headers CORS existentes
remove_action('init', 'add_cors_http_header');
remove_action('send_headers', 'send_cors_headers');

// Configuração CORS limpa
function adicionar_cors_api() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    
    add_filter('rest_pre_serve_request', function($value) {
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        } else {
            header('Access-Control-Allow-Origin: *');
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type');
            header('Access-Control-Max-Age: 3600');
            exit(0);
        }
        
        return $value;
    });
}
add_action('rest_api_init', 'adicionar_cors_api', 15);

// Garantir que os endpoints da REST API funcionem
add_filter('rest_url_prefix', function($prefix) {
    return 'wp-json';
});

// Forçar atualização das regras de rewrite
function flush_rewrite_rules_once() {
    if (get_option('autoridade_flush_rewrite') !== 'done') {
        flush_rewrite_rules();
        update_option('autoridade_flush_rewrite', 'done');
    }
}
add_action('init', 'flush_rewrite_rules_once', 20);

// Registrar campos ACF na API
function registrar_campos_acf() {
    if (function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group([
            'key' => 'group_certificados',
            'title' => 'Campos do Certificado',
            'fields' => [
                [
                    'key' => 'field_institution',
                    'label' => 'Instituição',
                    'name' => 'institution',
                    'type' => 'text',
                    'required' => 1,
                ],
                [
                    'key' => 'field_issue_date',
                    'label' => 'Data de Emissão',
                    'name' => 'issue_date',
                    'type' => 'date_picker',
                    'required' => 1,
                ],
                [
                    'key' => 'field_certificate_url',
                    'label' => 'URL do Certificado',
                    'name' => 'certificate_url',
                    'type' => 'url',
                ],
                [
                    'key' => 'field_image_url',
                    'label' => 'Imagem do Certificado',
                    'name' => 'image_url',
                    'type' => 'image',
                    'return_format' => 'url',
                ]
            ],
            'location' => [
                [
                    [
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'certificado',
                    ]
                ]
            ]
        ]);
    }
}
add_action('acf_init', 'registrar_campos_acf');

// Expor campos ACF na API REST
function expor_campos_acf_api() {
    if (function_exists('acf_add_options_page')) {
        $my_fields = [
            'institution',
            'issue_date',
            'certificate_url',
            'image_url'
        ];
        
        foreach ($my_fields as $field) {
            register_rest_field('certificado',
                $field,
                array(
                    'get_callback' => function($object) use ($field) {
                        return get_field($field, $object['id']);
                    },
                    'schema' => null,
                )
            );
        }
    }
}
add_action('rest_api_init', 'expor_campos_acf_api'); 