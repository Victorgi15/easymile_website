'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Target, Award, Building, Coffee, Bike, Star, Globe, Lightbulb, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const CarrieresPage = () => {
  const lifeAtEasyMile = [
    {
      icon: Users,
      title: 'Une équipe passionnée',
      description: 'Sportifs, curieux, créatifs et sociables - nous partageons nos passions et nos idées dans un environnement convivial.'
    },
    {
      icon: Heart,
      title: 'Un cadre de vie agréable',
      description: 'Petits-déjeuners réguliers, moments conviviaux, quiz, séminaires et team buildings pour créer du lien.'
    }
  ];

  const facilities = [
    'Une grande terrasse extérieure surplombant le canal',
    'Boissons chaudes de qualité et fruits frais',
    'Espace sieste, douches, local vélo',
    'Accès rapide au métro, centre-ville, restos, salles de sport'
  ];

  const commitments = [
    {
      title: 'Indice d\'égalité Femmes-Hommes 2024',
      value: '72/100',
      description: 'Un score en progression constante'
    },
    {
      title: 'Diversité et inclusion',
      value: '✓',
      description: 'Encouragement des candidatures féminines et ouverture aux personnes en situation de handicap'
    },
    {
      title: 'Développement professionnel',
      value: '✓',
      description: 'Accompagnement de l\'évolution de carrière et revue régulière des salaires'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-6 px-4 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-2"
          >
            Rejoignez l'aventure EasyMile
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            
          </motion.p>
        </div>
      </section>

      {/* Life at EasyMile Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="https://www.welcometothejungle.com/fr/companies/easymile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#37b0a6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#37b0a6]/90 transition-colors duration-300"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 25px rgba(55, 176, 166, 0.3)",
                    "0 12px 30px rgba(55, 176, 166, 0.4)",
                    "0 10px 25px rgba(55, 176, 166, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              >
                Consulter les offres
              </motion.a>
              <Link 
                href="/contact"
                className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 hover:text-gray-100 hover:shadow-lg transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Chez EasyMile, nous pensons que le cadre de travail est aussi important que les missions.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Notre siège, situé à Toulouse, offre un environnement à la fois moderne et convivial, entre les berges du Canal du Midi et notre site de test au sud de la ville.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {lifeAtEasyMile.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg mr-4">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Dans notre bâtiment Riverside, vous profitez aussi :</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{facility}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Notre programme EZ Wellness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Propose des ateliers bien-être, des intervenants extérieurs et des activités pour prendre soin de vous au quotidien.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center"
          >
            <Bike className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobilités douces encouragées</h3>
            <p className="text-gray-600">
              Transports en commun, vélos, véhicules électriques de service à disposition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Une entreprise engagée
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Chez EasyMile, nous sommes convaincus que la technologie ne peut avancer sans diversité.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              C'est pourquoi nous nous engageons activement pour un environnement inclusif, ouvert et équitable.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{commitment.value}</div>
                  <h3 className="text-lg font-bold mb-2">{commitment.title}</h3>
                  <p className="text-gray-600 text-sm">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Le secteur de l'autonomie reste encore très masculin, mais nous travaillons chaque jour pour que cela change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-6 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Suivez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Restez connecté avec EasyMile sur les réseaux sociaux
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Linkedin className="h-8 w-8 text-gray-600" />
              </motion.a>
              <motion.a
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Youtube className="h-8 w-8 text-gray-600" />
              </motion.a>
              <motion.a
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Instagram className="h-8 w-8 text-gray-600" />
              </motion.a>
              <motion.a
                href="#"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Facebook className="h-8 w-8 text-gray-600" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarrieresPage; 