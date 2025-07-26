import { Component, Inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ServiceCard } from '../../components/service-card/service-card';
import { TestimonialCard } from '../../components/testimonial-card/testimonial-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, RouterModule, ServiceCard, TestimonialCard, JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private dialog: MatDialog) {}

  coreServices = [
    {
      title: 'Fire Restoration',
      icon: 'images/icon-fire.png',
      description: 'It\'s a very intimidating experience to witness a house fire. Our sincere condolences go out to you if you have experienced such a loss. Fire damage can give you a "where to start?" feeling. Let us show you the way.',
      link: '/services/fire-damage'
    },
    {
      title: 'Smoke Cleanup',
      icon: 'images/icon-smoke.png',
      description: 'Where there\'s smoke, there\'s usually a fire. In some cases, the smoke alone can cause more long term damage to your home and to your health. Let our team of professionals get this done for you.',
      link: '/services/smoke-damage'
    },
    {
      title: 'Water Damage',
      icon: 'images/icon-water.png',
      description: 'Water damage restoration is a commonly needed service. Broken or frozen pipes, overflows, and sewer back-ups are common situations where water damage restoration is needed.',
      link: '/services/water-damage'
    },
    {
      title: 'Mold Cleanup',
      icon: 'images/icon-mold.png',
      description: 'Also known as mold remediation, mold cleanup and mold removal is another service that Bella Restoration professional services perform to keep your family safe.',
      link: '/services/mold-damage'
    }
  ];

  additionalServices = [
    {
      title: 'Professional Cleaning',
      icon: 'images/icon-cleaning.png',
      description: 'Our professional cleaning services go beyond restoration. We provide comprehensive cleaning solutions for both damaged properties and regular homes, including expert carpet cleaning services to restore your space to its best condition.',
      link: '/services/cleaning'
    },
    {
      title: 'Reconstruction',
      icon: 'images/icon-reconstruction.png',
      description: 'Our reconstruction services cover both interior and exterior projects. Whether you need repairs after damage or want to upgrade your space, our team of experts will restore your property to its best condition.',
      link: '/services/reconstruction'
    },
    {
      title: 'Emergency Board Up',
      icon: 'images/icon-emergency-board-up.png',
      description: 'Our 24/7 emergency board up service provides immediate protection for both residential and commercial properties. We offer temporary and permanent barricades to secure your property after damage.',
      link: '/services/emergency-board-up'
    },
    {
      title: 'Personal & Business Property',
      icon: 'images/icon-personal-property.png',
      description: 'We handle all aspects of personal and business property management during restoration, including packout, secure storage, and contents restoration to ensure your belongings are protected and restored.',
      link: '/services/personal-property'
    }
  ];

  serviceDetails: { [key: string]: any } = {
    'Fire Restoration': {
      title: 'Fire Damage Restoration',
      description: 'It\'s a very intimidating experience to witness a house fire. Our sincere condolences go out to you if you have experienced such a loss. Fire damage can give you a "where to start?" feeling. Let us show you the way.',
      process: [
        'Emergency Response - We\'re available 24/7 to respond to your fire damage emergency',
        'Assessment - Our team will assess the extent of the damage and create a restoration plan',
        'Board-up & Tarping - We secure your property to prevent further damage',
        'Water Removal - We remove water from firefighting efforts',
        'Smoke & Soot Removal - We clean and remove smoke and soot from all surfaces',
        'Cleaning & Sanitizing - We clean and sanitize affected areas',
        'Restoration - We restore your property to its pre-damage condition'
      ],
      types: [
        'House fires', 'Kitchen fires', 'Electrical fires', 'Wildfire damage', 'Commercial fires', 'Industrial fires'
      ]
    },
    'Water Damage': {
      title: 'Water Damage Restoration',
      description: 'Water damage restoration is a commonly needed service. Broken or frozen pipes, overflows, and sewer back-ups are common situations where water damage restoration is needed.',
      process: [
        'Emergency Response - We\'re available 24/7 to respond to your water damage emergency',
        'Assessment - Our team will assess the extent of the damage and create a restoration plan',
        'Water Extraction - We use professional equipment to remove standing water',
        'Drying & Dehumidification - Specialized equipment is used to dry affected areas',
        'Cleaning & Sanitizing - We clean and sanitize affected areas to prevent mold growth',
        'Restoration - We restore your property to its pre-damage condition'
      ],
      types: [
        'Broken or frozen pipes', 'Flooding from storms', 'Sewer backups', 'Appliance leaks', 'Roof leaks', 'Basement flooding'
      ]
    },
    'Smoke Cleanup': {
      title: 'Smoke Damage Cleanup',
      description: 'Smoke damage can be just as devastating as fire damage itself. The lingering odors and residue can affect your health and property. Our professional smoke damage cleanup services will restore your property to its pre-damage condition.',
      process: [
        'Assessment - We evaluate the extent of smoke damage throughout your property',
        'Ventilation - We use industrial fans and air scrubbers to remove smoke particles',
        'Surface Cleaning - We clean all affected surfaces using specialized techniques',
        'Odor Removal - We use advanced deodorization methods to eliminate smoke odors',
        'Content Cleaning - We clean and restore your personal belongings',
        'Final Inspection - We ensure all smoke damage has been properly addressed'
      ],
      types: [
        'Dry smoke damage', 'Wet smoke damage', 'Protein smoke residue', 'Fuel oil soot', 'Fire extinguisher residue', 'Lingering smoke odors'
      ]
    },
    'Mold Cleanup': {
      title: 'Mold Remediation',
      description: 'Mold growth can be dangerous to your health and property. Our professional mold remediation services safely remove mold and prevent future growth, ensuring your property is clean and safe.',
      process: [
        'Inspection - We identify the source and extent of mold growth',
        'Containment - We isolate affected areas to prevent mold spread',
        'Air Filtration - We use HEPA filters to remove mold spores from the air',
        'Mold Removal - We safely remove mold from all affected surfaces',
        'Cleaning & Sanitizing - We clean and sanitize affected areas',
        'Restoration - We repair or replace damaged materials'
      ],
      types: [
        'Black mold (Stachybotrys)', 'Aspergillus', 'Penicillium', 'Cladosporium', 'Alternaria', 'Mucor'
      ]
    },
    'Professional Cleaning': {
      title: 'Professional Cleaning Services',
      description: 'At Bella Restoration, we understand that a clean environment is essential for both comfort and health. Our professional cleaning services extend beyond restoration work to provide comprehensive cleaning solutions for all types of properties.',
      process: [
        'Assessment - We evaluate your cleaning needs and develop a customized plan',
        'Preparation - We prepare the area and protect your belongings',
        'Cleaning - We perform thorough cleaning using appropriate methods and products',
        'Inspection - We conduct a final inspection to ensure complete satisfaction'
      ],
      types: [
        'Post-restoration deep cleaning', 'Professional carpet cleaning', 'Upholstery cleaning', 'Air duct cleaning', 'Commercial cleaning services', 'Residential cleaning services', 'Specialized cleaning for damaged properties'
      ]
    },
    'Reconstruction': {
      title: 'Reconstruction Services',
      description: 'At Bella Restoration, we understand that reconstruction is more than just repairs - it\'s about restoring your property to its best possible condition. Our team of skilled professionals handles both interior and exterior reconstruction projects with precision and care.',
      process: [
        'Assessment - We evaluate the scope of work and develop a detailed reconstruction plan',
        'Planning - We create a timeline and coordinate all necessary materials and permits',
        'Execution - Our skilled team performs the reconstruction work with attention to detail',
        'Quality Control - We conduct thorough inspections to ensure the highest quality standards',
        'Completion - We deliver the finished project and ensure your complete satisfaction'
      ],
      types: [
        'Interior reconstruction', 'Exterior reconstruction', 'Kitchen and bathroom remodeling', 'Flooring installation', 'Drywall and ceiling repair', 'Roofing and siding', 'Custom cabinetry and built-ins'
      ]
    },
    'Emergency Board Up': {
      title: 'Emergency Board Up Services',
      description: 'When disaster strikes, securing your property is crucial. Our 24/7 emergency board up service provides immediate protection for both residential and commercial properties, preventing further damage and ensuring safety.',
      process: [
        'Emergency Response - We arrive quickly to assess the situation and secure your property',
        'Assessment - We evaluate the damage and determine the best protection method',
        'Implementation - We install appropriate temporary or permanent barricades',
        'Documentation - We provide detailed documentation for insurance purposes',
        'Follow-up - We ensure the security measures remain effective until repairs begin'
      ],
      types: [
        'Residential property board up', 'Commercial property board up', 'Temporary emergency barricades', 'Permanent security solutions', 'Window and door protection', 'Roof tarping and protection', 'Structural stabilization'
      ]
    },
    'Personal & Business Property': {
      title: 'Personal & Business Property Services',
      description: 'When disaster strikes, protecting and restoring your belongings is just as important as restoring your property. Our comprehensive property management services ensure your personal and business items are handled with care throughout the restoration process.',
      process: [
        'Assessment - We evaluate your property and create a detailed inventory',
        'Packout - We carefully pack and transport your belongings',
        'Storage - We provide secure, climate-controlled storage',
        'Restoration - We clean and restore damaged items',
        'Return - We safely return your restored belongings'
      ],
      types: [
        'Professional packing and labeling', 'Climate-controlled storage', 'Contents restoration', 'Document and data protection', 'Business equipment handling', 'Furniture and electronics restoration', 'Art and collectible restoration'
      ]
    }
  };

  testimonials = [
    {
      photo: 'images/user4.jpg',
      quote: 'I wanted to take a moment and thank everyone that came out to work on this project!! Everyone was extremely professional and polite and I have to say that I really appreciated their can do attitude. Please pass this on to everyone and give them my sincere thanks!! Take Care.',
      author: 'Karen Taylor, Denver Apartment Rentals'
    },
    {
      photo: 'images/user3.jpg',
      quote: 'I am writing this letter today with many thanks to Bella Restoration. When my husband and I returned from vacation, we walked in to find that our water line on our swamp cooler was broken. It had spilled water all over our laminate flooring in our kitchen. I walked into my insurance agent\'s office to find out what I needed to do about this. He handed me a card for Bella Restoration. As I was talking with my agent I had noticed that their card said they were not only a restoration company but a full service reconstruction team. That was fabulous.',
      author: 'Kris Gordon'
    },
    {
      photo: 'images/user2.jpg',
      quote: 'We hired the professionals from Bella Restoration in October 2010 to replace our kitchen floor, which had been destroyed due to flooding caused by a dishwasher malfunction. Of course, the flooding occurred on a weekend so we knew that finding someone to fix not only the leaking issue but the floor was going to be a challenge. We were pleasantly surprised.',
      author: 'Ava Mae, Dealer 360'
    },
    {
      photo: 'images/user1.jpg',
      quote: 'After a small fire in our basement, we were devastated and didn\'t know where to turn. Bella Restoration responded within hours and handled everything from the initial cleanup to working with our insurance company. Their team was compassionate, professional, and restored our home better than it was before.',
      author: 'Michael Rodriguez, Homeowner'
    },
    {
      photo: 'images/user5.jpg',
      quote: 'Our office building suffered water damage from a burst pipe over the weekend. Bella Restoration had our business back up and running in just three days. Their emergency response team worked around the clock to minimize our downtime. Excellent service and communication throughout the entire process.',
      author: 'Sarah Chen, Property Manager'
    }
  ];

  onServiceCardClick(serviceTitle: string) {
    const serviceData = this.serviceDetails[serviceTitle];
    if (serviceData) {
      this.dialog.open(ServiceModalComponent, {
        width: '800px',
        maxWidth: '85vw',
        maxHeight: '80vh',
        hasBackdrop: true,
        disableClose: false,
        autoFocus: false,
        panelClass: 'custom-dialog-container',
        data: serviceData
      });
    }
  }
}

// Service Modal Component
@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="service-modal-wrapper">
      <div class="modal-header">
        <h2 mat-dialog-title>{{ data.title }}</h2>
        <button mat-icon-button mat-dialog-close class="close-btn">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <div mat-dialog-content class="modal-content-wrapper">
        <div class="modal-content-inner">
          <p class="service-description">{{ data.description }}</p>
          
          <div class="section-divider">
            <h3><mat-icon>build_circle</mat-icon> Our Process</h3>
            <ol class="process-list">
              <li *ngFor="let step of data.process; let i = index">
                <span class="step-number">{{ i + 1 }}</span>
                <span class="step-text">{{ step }}</span>
              </li>
            </ol>
          </div>
          
          <div class="section-divider">
            <h3><mat-icon>checklist</mat-icon> Types We Handle</h3>
            <ul class="types-list">
              <li *ngFor="let type of data.types">
                <mat-icon class="check-icon">check_circle</mat-icon>
                {{ type }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div mat-dialog-actions class="modal-actions">
        <button mat-raised-button color="primary" class="primary-btn" (click)="callNow()">
          <mat-icon>call</mat-icon> Call (303) 554-8883
        </button>
        <button mat-stroked-button color="accent" class="secondary-btn" (click)="emailUs()">
          <mat-icon>email</mat-icon> Get Quote
        </button>
      </div>
    </div>
  `,
  styles: [`
    /* Global dialog container styling */
    ::ng-deep .custom-dialog-container {
      margin: 20px !important;
      max-height: calc(100vh - 40px) !important;
      max-width: calc(100vw - 40px) !important;
    }
    
    ::ng-deep .custom-dialog-container .mat-mdc-dialog-container {
      padding: 0 !important;
      border-radius: 8px !important;
      overflow: hidden !important;
    }
    
    .service-modal-wrapper {
      display: flex;
      flex-direction: column;
      max-height: 75vh;
      min-height: 400px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
      color: white;
      padding: 16px 20px;
      flex-shrink: 0;
    }
    
    .modal-header h2 {
      color: white;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
    
    .close-btn {
      color: white !important;
      background: rgba(255,255,255,0.1) !important;
      border-radius: 50% !important;
      transition: all 0.3s ease !important;
      width: 36px !important;
      height: 36px !important;
    }
    
    .close-btn:hover {
      background: rgba(255,255,255,0.2) !important;
    }
    
    .modal-content-wrapper {
      flex: 1;
      overflow-y: auto;
      background: #fafafa;
      padding: 0 !important;
      min-height: 0;
    }
    
    .modal-content-inner {
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .service-description {
      font-size: 1rem;
      line-height: 1.4;
      color: #495057;
      margin: 0;
      padding: 12px 16px;
      background: white;
      border-radius: 6px;
      border-left: 3px solid #dc3545;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .section-divider {
      margin: 0;
      background: white;
      border-radius: 6px;
      padding: 12px 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .modal-content-inner h3 {
      color: #2c3e50;
      font-size: 1.1rem;
      margin: 0 0 8px 0;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .modal-content-inner h3 mat-icon {
      color: #dc3545;
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }
    
    .process-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    
    .process-list li {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      background: #f8f9fa;
      border-radius: 4px;
      border-left: 2px solid #dc3545;
      transition: all 0.3s ease;
      font-size: 0.85rem;
    }
    
    .process-list li:hover {
      background: #e9ecef;
    }
    
    .step-number {
      background: linear-gradient(135deg, #dc3545, #c82333);
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.75rem;
      flex-shrink: 0;
    }
    
    .step-text {
      color: #495057;
      line-height: 1.3;
      font-size: 0.85rem;
    }
    
    .types-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
    }
    
    .types-list li {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      background: #f8f9fa;
      border-radius: 4px;
      color: #495057;
      font-size: 0.85rem;
      line-height: 1.3;
      transition: all 0.3s ease;
    }
    
    .types-list li:hover {
      background: #e9ecef;
    }
    
    .check-icon {
      color: #28a745 !important;
      font-size: 0.9rem !important;
      width: 0.9rem !important;
      height: 0.9rem !important;
      flex-shrink: 0;
    }
    
    .modal-actions {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 12px 20px !important;
      border-radius: 0;
      display: flex;
      gap: 12px;
      justify-content: center;
      border-top: 1px solid #dee2e6;
      flex-shrink: 0;
    }
    
    .primary-btn {
      background: linear-gradient(135deg, #dc3545, #c82333) !important;
      color: white !important;
      padding: 8px 20px !important;
      font-size: 0.9rem !important;
      font-weight: 600 !important;
      border-radius: 18px !important;
      min-width: 140px !important;
      box-shadow: 0 3px 8px rgba(220, 53, 69, 0.3) !important;
      transition: all 0.3s ease !important;
    }
    
    .primary-btn:hover {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4) !important;
    }
    
    .secondary-btn {
      background: white !important;
      border: 2px solid #dc3545 !important;
      color: #dc3545 !important;
      padding: 6px 20px !important;
      font-size: 0.9rem !important;
      font-weight: 600 !important;
      border-radius: 18px !important;
      min-width: 140px !important;
      transition: all 0.3s ease !important;
    }
    
    .secondary-btn:hover {
      background: #dc3545 !important;
      color: white !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 3px 8px rgba(220, 53, 69, 0.3) !important;
    }
    
    @media (max-width: 600px) {
      ::ng-deep .custom-dialog-container {
        margin: 10px !important;
        max-height: calc(100vh - 20px) !important;
        max-width: calc(100vw - 20px) !important;
      }
      
      .modal-header {
        padding: 12px 16px;
      }
      
      .modal-header h2 {
        font-size: 1.2rem;
      }
      
      .modal-content-inner {
        padding: 12px 16px;
        gap: 12px;
      }
      
      .section-divider {
        padding: 10px 12px;
      }
      
      .process-list {
        grid-template-columns: 1fr;
        gap: 6px;
      }
      
      .types-list {
        grid-template-columns: 1fr;
        gap: 4px;
      }
      
      .modal-actions {
        flex-direction: column;
        padding: 12px 16px !important;
        gap: 8px;
      }
      
      .primary-btn, .secondary-btn {
        min-width: 100% !important;
      }
    }
  `]
})
export class ServiceModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  callNow() {
    window.location.href = 'tel:3035548883';
  }

  emailUs() {
    window.location.href = 'mailto:admin@getbellaservices.com?subject=Service Quote Request';
  }
}
