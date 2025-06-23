'use client';

import React from 'react';
import Hero from '@/components/Hero';
import { Heart, Shield, Users, Lightbulb, Star, Calendar, Award, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      subtitle: 'Driven by an autonomous future',
      description: 'Nous sommes animés par la passion de créer un avenir autonome, où la technologie améliore la mobilité et la sécurité.'
    },
    {
      icon: Shield,
      title: 'Confiance',
      subtitle: 'Commit, and deliver',
      description: 'Nous nous engageons et tenons nos promesses, construisant des relations de confiance durables avec nos clients et partenaires.'
    },
    {
      icon: Users,
      title: 'Équipe',
      subtitle: 'We are one team',
      description: 'Nous travaillons ensemble comme une seule équipe, partageant nos compétences et notre expertise pour atteindre l\'excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      subtitle: 'Create and be determined',
      description: 'Nous créons et innovons avec détermination, repoussant constamment les limites de la technologie autonome.'
    },
    {
      icon: Star,
      title: 'Excellence',
      subtitle: 'Always go the extra mile',
      description: 'Nous allons toujours au-delà des attentes, visant l\'excellence dans chaque aspect de notre travail.'
    }
  ];

  const timeline = [
    { date: 'Juin 2014', event: 'Création d\'EasyMile par Gilbert Gagnaire & Philippe Ligier' },
    { date: 'Avril 2015', event: 'Premiers développements technologiques' },
    { date: 'Janvier 2017', event: 'Premiers déploiements commerciaux' },
    { date: 'Juin 2018', event: 'Expansion internationale' },
    { date: 'Juin 2019', event: 'Nouveaux partenariats stratégiques' },
    { date: 'Novembre 2019', event: 'Certifications de sécurité obtenues' },
    { date: 'Avril 2021', event: 'Investissement de Continental' },
    { date: 'Décembre 2021', event: 'Partenariat avec Alstom' },
    { date: 'Juin 2022', event: 'Expansion en Asie-Pacifique' },
    { date: 'Octobre 2022', event: 'Nouveaux produits lancés' },
    { date: 'Novembre 2023', event: 'Prix FrenchTech 2030' },
    { date: 'Mars 2024', event: 'Certifications internationales' },
    { date: 'Juin 2024', event: 'Leadership technologique confirmé' }
  ];

  const awards = [
    {
      year: '2023',
      title: 'FrenchTech 2030',
      description: 'Reconnu comme une entreprise innovante de premier plan'
    },
    {
      year: '2020',
      title: 'Meilleure Solution AGV',
      description: 'Prix IFOY dans la catégorie AGV & Intralogistics Robots'
    }
  ];

  const partners = [
    'Ligier - Expert en structures de véhicules',
    'TLD - Fournisseur de support au sol',
    'Continental - Fournisseur technologique automobile',
    'Alstom - Géant du transport',
    'Bpifrance - Banque d\'investissement',
    'Searchlight Capital Partners',
    'McWin',
    'NextStage AM'
  ];

  return (
    <main>
      <Hero />
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nos Valeurs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12"
          >
            Les valeurs d'EasyMile définissent notre façon de travailler et de réussir. 
            Elles guident notre approche commerciale au bénéfice de nos clients, partenaires et employés.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.3) }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg mr-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="text-accent font-medium">#{value.title.toLowerCase()}</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-700 mb-3">
                  {value.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Notre Histoire
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-2 bg-[#37b0a6] rounded-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:px-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-accent mr-2" />
                      <span className="font-bold text-accent">{item.date}</span>
                    </div>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-8 h-8 bg-white rounded-full border-2 border-[#37b0a6] shadow-lg z-10"
                />
                <div className="flex-1 md:px-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Récompenses et Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.2) }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">{award.title}</h3>
                    <p className="text-accent font-medium">{award.year}</p>
                  </div>
                </div>
                <p className="text-gray-600">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nos Partenaires
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              EasyMile se concentre sur ce que nous faisons de mieux - la technologie sans conducteur, 
              en travaillant avec des fournisseurs de premier plan et des équipementiers renommés.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Cette combinaison inédite d'investisseurs qui sont aussi des partenaires techniques 
              fournit non seulement un financement solide mais aussi une feuille de route technologique puissante.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <Handshake className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-gray-700">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
