import { motion } from 'framer-motion';
import { IMAGES } from '../data/products';

const journalEntries = [
  {
    id: 1,
    title: 'The Season of Citrus',
    excerpt: 'As winter deepens, citrus reaches its most expressive peak. We explore the varieties that define this luminous season.',
    date: 'January 2025',
    image: IMAGES.citrusCollection,
    category: 'Seasons'
  },
  {
    id: 2,
    title: 'On the Art of Selection',
    excerpt: 'What makes one fig exceptional and another merely good? The subtle markers of quality that guide our choices.',
    date: 'December 2024',
    image: IMAGES.fig,
    category: 'Philosophy'
  },
  {
    id: 3,
    title: 'Fruit & Gathering',
    excerpt: 'The role of fruit in bringing people together — from the simplest shared apple to the most considered gift arrangement.',
    date: 'November 2024',
    image: IMAGES.giftCollection,
    category: 'Lifestyle'
  },
  {
    id: 4,
    title: 'A Study in Pomegranates',
    excerpt: 'Ancient, complex, and endlessly fascinating. We explore the pomegranate\'s journey from ancient Persia to the modern table.',
    date: 'October 2024',
    image: IMAGES.pomegranate,
    category: 'Origins'
  }
];

export default function JournalPage() {
  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      {/* Header */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-handwritten text-terracotta text-lg">Stories & Reflections</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown mt-4">Journal</h1>
            <p className="mt-6 text-brown/60 text-lg max-w-xl mx-auto">
              Thoughts on fruit, seasons, and the simple pleasures of nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-14 lg:py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14">
          <div className="space-y-12 lg:space-y-20">
            {journalEntries.map((entry, index) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-xs font-medium text-terracotta tracking-wide uppercase">{entry.category}</span>
                  <h2 className="font-serif text-3xl text-brown mt-2">{entry.title}</h2>
                  <p className="mt-4 text-brown/60 leading-relaxed">{entry.excerpt}</p>
                  <p className="mt-4 text-brown/40 text-sm">{entry.date}</p>
                  <button className="mt-6 text-sm font-medium text-brown hover:text-terracotta transition-colors border-b border-brown/20 hover:border-terracotta pb-0.5">
                    Read More
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
