import { Injectable } from '@nestjs/common';

@Injectable()
export class BuilderService {
  getBuilderOptions() {
    return {
      sizes: [
        { label: '300ml', price: 10 },
        { label: '500ml', price: 14.9 },
        { label: '700ml', price: 18.9 },
      ],
      fruits: [
        { label: 'Morango', price: 2.5 },
        { label: 'Banana', price: 2 },
        { label: 'Kiwi', price: 3 },
        { label: 'Uva', price: 2.5 },
      ],
      creams: [
        { label: 'Leite Ninho', price: 3 },
        { label: 'Nutella', price: 4 },
        { label: 'Paçoca', price: 2.5 },
        { label: 'Doce de Leite', price: 3 },
      ],
      toppings: [
        { label: 'Granola', price: 2 },
        { label: 'Castanha', price: 3 },
        { label: 'Ovomaltine', price: 3.5 },
        { label: 'Confete', price: 2 },
      ],
    };
  }
}
