import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCard {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  images: GalleryImage[];
}

const Gallery = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const galleryCards: GalleryCard[] = [
    {
      id: 1,
      title: 'Modern Office Workspace',
      category: 'Office',
      coverImage: '/university.jpg',
      images: [
        { src: '/university.jpg', alt: 'University building exterior' },
        { src: '/university1.jpg', alt: 'University building exterior' },
        { src: '/university2.jpg', alt: 'University building exterior' }
      ]
    },
    {
      id: 2,
      title: 'Team Collaboration',
      category: 'Team',
      coverImage: '/4.png',
      images: [
        { src: '/4.png', alt: 'Team brainstorming session' },
        { src: '/3.png', alt: 'Development team working' },
        { src: '/2.png', alt: 'Development team working' }
      ]
    },
    {
      id: 3,
      title: 'Office Setup',
      category: 'Office',
      coverImage: '/mainoffice.jpg',
      images: [
        { src: '/mainoffice.jpg', alt: 'Advanced technology setup' },
        { src: '/office.jpg', alt: 'Advanced technology setup' }
      ]
    },
  ];

  const openModal = (cardIndex: number) => {
    setSelectedCard(cardIndex);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCard !== null) {
      const currentCard = galleryCards[selectedCard];
      setSelectedImageIndex((selectedImageIndex + 1) % currentCard.images.length);
    }
  };

  const prevImage = () => {
    if (selectedCard !== null) {
      const currentCard = galleryCards[selectedCard];
      setSelectedImageIndex(selectedImageIndex === 0 ? currentCard.images.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 border border-black transform rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 border border-black transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
              Gallery
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Behind the Scenes
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into our workspace, team, and creative process
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.coverImage}
                  alt={card.title}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <Images className="w-6 h-6" />
                    <span className="text-sm font-medium">{card.images.length} Photos</span>
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">{card.category}</span>
                </div>

                {/* Image count badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">{card.images.length}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons - only show if more than 1 image */}
            {galleryCards[selectedCard].images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={galleryCards[selectedCard].images[selectedImageIndex].src}
              alt={galleryCards[selectedCard].images[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{galleryCards[selectedCard].images[selectedImageIndex].alt}</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300">{galleryCards[selectedCard].category}</p>
                {galleryCards[selectedCard].images.length > 1 && (
                  <p className="text-sm text-gray-300">
                    {selectedImageIndex + 1} of {galleryCards[selectedCard].images.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;