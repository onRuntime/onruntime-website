

export interface CityTestimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    imageUrl?: string;
  }
  
  export interface LocalProject {
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
  }
  
  export interface City {
    id: string;            
    name: string;          
    region: string;        
    population: number;    

    title: string;         
    description: string;   

    introText: string;     
    expertiseText: string; 
    whyChooseUs: string;   

    strengths: Array<{
      title: string;
      description: string;
    }>;

    focusedServices: Array<{
      name: string;
      description: string;
      link: string;
    }>;

    localProjects: LocalProject[];

    testimonials: CityTestimonial[];

    contactInfo: {
      address?: string;   
      phone: string;
      email: string;
      meetingPoints?: string[]; 
    };

    stats: Array<{
      label: string;
      value: string;
      description: string;
    }>;

    geo: {
      latitude: string;
      longitude: string;
    };

    nearbyLocations: string[];
  }