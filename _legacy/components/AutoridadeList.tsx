import React, { useEffect, useState } from 'react';
import { AutoridadePost, wordpressService } from '../services/wordpress';
import Link from 'next/link';
import Image from 'next/image';

const AutoridadeList: React.FC = () => {
  const [posts, setPosts] = useState<AutoridadePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await wordpressService.getAutoridadePosts();
        setPosts(data);
      } catch (err) {
        setError('Erro ao carregar os posts');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center p-4">Carregando...</div>;
  if (error) return <div className="text-center text-red-600 p-4">{error}</div>;
  if (posts.length === 0) return <div className="text-center p-4">Nenhum post encontrado</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts.map((post) => (
        <Link 
          href={`/autoridade/${post.slug}`} 
          key={post.id}
          className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <article className="h-full flex flex-col">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <div className="relative h-48 w-full">
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <div className="p-4 flex-grow">
              <h2 
                className="text-xl font-bold mb-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div 
                className="text-gray-600 line-clamp-3"
                dangerouslySetInnerHTML={{ 
                  __html: post.yoast_head_json?.description || post.content.rendered 
                }}
              />
            </div>
            <div className="p-4 text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default AutoridadeList; 