import { BadRequestException, Injectable } from '@nestjs/common';
import { PreviewOrderDto } from './dto/preview-order.dto';

@Injectable()
export class OrdersService {
  private builderOptions = {
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

  previewOrder(dto: PreviewOrderDto) {
    const size = this.builderOptions.sizes.find(
      (item) => item.label === dto.size,
    );

    if (!size) {
      throw new BadRequestException('Tamanho inválido.');
    }

    const fruits = this.validateGroup(
      dto.fruits ?? [],
      this.builderOptions.fruits,
    );

    const creams = this.validateGroup(
      dto.creams ?? [],
      this.builderOptions.creams,
    );

    const toppings = this.validateGroup(
      dto.toppings ?? [],
      this.builderOptions.toppings,
    );

    const total =
      size.price +
      fruits.reduce((sum, item) => sum + item.price, 0) +
      creams.reduce((sum, item) => sum + item.price, 0) +
      toppings.reduce((sum, item) => sum + item.price, 0);

    return {
      size,
      fruits,
      creams,
      toppings,
      total,
    };
  }

  private validateGroup(
    selectedLabels: string[],
    validOptions: { label: string; price: number }[],
  ) {
    return selectedLabels.map((label) => {
      const item = validOptions.find((option) => option.label === label);

      if (!item) {
        throw new BadRequestException(`Item inválido: ${label}`);
      }

      return item;
    });
  }
}
