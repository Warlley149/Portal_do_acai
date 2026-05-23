import { ArrayMaxSize, IsArray, IsOptional, IsString } from 'class-validator';

export class PreviewOrderDto {
  @IsString()
  size!: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(3)
  @IsString({ each: true })
  fruits?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(3)
  @IsString({ each: true })
  creams?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(4)
  @IsString({ each: true })
  toppings?: string[];
}
