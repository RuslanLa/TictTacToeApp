import { Injectable } from '@angular/core';
@Injectable()

/**Рандомный сервис */
export class RandomService {

    /**Возвращает рандомное число в диапозоне */
    GetRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**Возвращает элемент массива на рандомной позиции */
    GetRandomFromArray<T>(array: T[]): T {
        var index = this.GetRandomInt(0, array.length - 1);
        return array[index];
    }
}