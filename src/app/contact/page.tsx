'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Simulation d'envoi - remplacez par votre logique d'API
      console.log('Données du formulaire:', data);
      
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Réinitialiser le formulaire après envoi réussi
      reset();
      alert('Message envoyé avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg font-medium leading-relaxed mb-6">
              Vous avez un projet d'autonomie ? Vous souhaitez en savoir plus sur nos technologies ?
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Nos experts sont à votre écoute, partout dans le monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom *</label>
                    <input
                      type="text"
                      {...register('firstName', { 
                        required: 'Le prénom est requis',
                        minLength: { value: 2, message: 'Le prénom doit contenir au moins 2 caractères' }
                      })}
                      className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-accent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom *</label>
                    <input
                      type="text"
                      {...register('lastName', { 
                        required: 'Le nom est requis',
                        minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' }
                      })}
                      className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-accent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'L\'email est requis',
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: 'Veuillez entrer un email valide' 
                      }
                    })}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-accent ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Entreprise</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 bg-background border border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet *</label>
                  <select 
                    {...register('subject', { required: 'Veuillez sélectionner un sujet' })}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-accent ${
                      errors.subject ? 'border-red-500' : 'border-gray-600'
                    }`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="info">Informations sur nos technologies</option>
                    <option value="integration">Projet d'intégration</option>
                    <option value="career">Opportunités de carrière</option>
                    <option value="other">Autre</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={5}
                    {...register('message', { 
                      required: 'Le message est requis',
                      minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' }
                    })}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-accent resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#37b0a6] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#2a8a82] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">FRANCE</h3>
                      <p className="text-gray-500 leading-relaxed">
                        EasyMile SAS<br />
                        21 Boulevard de la Marquette, Hall B<br />
                        31000 Toulouse, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <p className="text-gray-500">
                        +33 (0)5 3210 8190
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-500">
                        contact@easymile.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <p className="text-gray-500">
                        Lundi - Vendredi : 9h00 - 18h00<br />
                        (Heure de Paris)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">Besoin d'une réponse rapide ?</h3>
                <p className="text-gray-500 mb-4">
                  Pour les demandes urgentes ou les projets avec des délais serrés, n'hésitez pas à nous appeler directement.
                </p>
                <p className="text-gray-500">
                  Notre équipe technique est disponible pour répondre à vos questions spécifiques sur l'intégration et le déploiement.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4 bg-gray-50">
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

export default ContactPage; 