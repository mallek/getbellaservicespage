import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ServiceCard } from '../../components/service-card/service-card';
import { TestimonialCard } from '../../components/testimonial-card/testimonial-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule, ServiceCard, TestimonialCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  coreServices = [
    {
      title: 'Fire Restoration',
      icon: 'images/icon-fire.png',
      description: `It's a very intimidating experience to witness a house fire. Our sincere condolences go out to you if you have experienced such a loss. Fire damage can give you a "where to start?" feeling. Let us show you the way.`,
      link: '/services/fire-damage'
    },
    {
      title: 'Smoke Cleanup',
      icon: 'images/icon-smoke.png',
      description: `Where there's smoke, there's usually a fire. In some cases, the smoke alone can cause more long term damage to your home and to your health. Let our team of professionals get this done for you.`,
      link: '/services/smoke-damage'
    },
    {
      title: 'Water Damage',
      icon: 'images/icon-water.png',
      description: `Water damage restoration is a commonly needed service. Broken or frozen pipes, overflows, and sewer back-ups are common situations where water damage restoration is needed.`,
      link: '/services/water-damage'
    },
    {
      title: 'Mold Cleanup',
      icon: 'images/icon-mold.png',
      description: `Also known as mold remediation, mold cleanup and mold removal is another service that Bella Restoration professional services perform to keep your family safe.`,
      link: '/services/mold-damage'
    }
  ];
  additionalServices = [
    {
      title: 'Professional Cleaning',
      icon: 'images/icon-cleaning.png',
      description: `Our professional cleaning services go beyond restoration. We provide comprehensive cleaning solutions for both damaged properties and regular homes, including expert carpet cleaning services to restore your space to its best condition.`,
      link: '/services/cleaning'
    },
    {
      title: 'Reconstruction',
      icon: 'images/icon-reconstruction.png',
      description: `Our reconstruction services cover both interior and exterior projects. Whether you need repairs after damage or want to upgrade your space, our team of experts will restore your property to its best condition.`,
      link: '/services/reconstruction'
    },
    {
      title: 'Emergency Board Up',
      icon: 'images/icon-emergency-board-up.png',
      description: `Our 24/7 emergency board up service provides immediate protection for both residential and commercial properties. We offer temporary and permanent barricades to secure your property after damage.`,
      link: '/services/emergency-board-up'
    },
    {
      title: 'Personal & Business Property',
      icon: 'images/icon-personal-property.png',
      description: `We handle all aspects of personal and business property management during restoration, including packout, secure storage, and contents restoration to ensure your belongings are protected and restored.`,
      link: '/services/personal-property'
    }
  ];
  testimonials = [
    {
      photo: 'images/user4.jpg',
      quote: `"I wanted to take a moment and thank everyone that came out to work on this project!!  Everyone was extremely professional and polite and I have to say that I really appreciated their can do attitude.  Please pass this on to everyone and give them my sincere thanks!!  Take Care."`,
      author: '- Karen Taylor, Denver Apartment Rentals'
    },
    {
      photo: 'images/user3.jpg',
      quote: `"I am writing this letter today with many thanks to Bella Restoration. When my husband and I returned from vacation, we walked in to find that our water line on our swamp cooler was broken. It had spilled water all over our laminate flooring in our kitchen. I walked into my insurance agent's office to find out what I needed to do about this. He handed me a card for Bella Restoration. As I was talking with my agent I had noticed that their card said they were not only a restoration company but a full service reconstruction team. That was fabulous."`,
      author: '- Kris Gordon'
    },
    {
      photo: 'images/user2.jpg',
      quote: `"We hired the professionals from Bella Restoration in October 2010 to replace our kitchen floor, which had been destroyed due to flooding caused by a dishwasher malfunction. Of course, the flooding occurred on a weekend so we knew that finding someone to fix not only the leaking issue but the floor was going to be a challenge. We were pleasantly surprised."`,
      author: '- Ava Mae, Dealer 360'
    }
  ];
}
