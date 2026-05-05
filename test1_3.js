class Shape {

    area() {
        throw new Error("Метод area() должен быть реализован в подклассе");
    }

    perimeter() {
        throw new Error("Метод perimeter() должен быть реализован в подклассе");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return (Math.PI * this.radius ** 2).toFixed(2);
    }
  
    perimeter() {
      return (2 * Math.PI * this.radius).toFixed(2);
    }
  }
  

  const rectangle = new Rectangle(2, 5);
  console.log('Прямоугольник:');
  console.log('Ширина =', rectangle.width);
  console.log('Длина  =', rectangle.height);
  console.log('Площадь =', rectangle.area());
  console.log('Периметр =', rectangle.perimeter());
  
  const circle = new Circle(4);
  console.log('\nКруг:');
  console.log('Радиус  =', circle.radius);
  console.log('Площадь =', circle.area());
  console.log('Периметр =', circle.perimeter());