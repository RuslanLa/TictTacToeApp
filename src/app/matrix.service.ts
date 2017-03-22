import { Injectable } from '@angular/core';
@Injectable()

/**Сервис матриц */
export class MatrixService{

      /**Проверка массива на условия */
      CheckLine<T>(points: T[], checker: (value: T) => boolean): boolean {
        return points.every((value: T) => {
            return checker(value);
        });
    }

    /**Возвращает диагональ */
    GetDiagonal<T>(isMain: boolean, points:T[][]): T[] {
        var result = [];
        for (var i = 0; i < points.length; i++) {
            var j = isMain ? i : (points.length - 1 - i);
            result.push(points[i][j]);
        }

        return result;
    }

    /**Проверяет диагональ */
    СheckDiagonal<T>(points:T[][], isMain: boolean, checker: (value: T) => boolean): boolean {
        for (var i = 0; i < points.length; i++) {
            var j = isMain ? i : (points.length - 1 - i);
            if (!checker(points[i][j])) {
                return false;
            }
        }

        return true;
    }
}