import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: 'Sparkles',
      title: 'Таро',
      description: 'Раскрытие тайн прошлого, настоящего и будущего через древнее искусство карт Таро',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Moon',
      title: 'Астрология',
      description: 'Персональный гороскоп, натальная карта и прогнозы на основе небесных светил',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Eye',
      title: 'Ясновидение',
      description: 'Духовное консультирование и ответы на вопросы через развитую интуицию',
      price: 'от 4000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Любовная магия',
      description: 'Гармонизация отношений, привлечение любви и исцеление сердечных ран',
      price: 'от 6000 ₽'
    }
  ];

  const products = [
    {
      image: 'https://cdn.poehali.dev/projects/a7bb806e-3df1-414a-bd5f-db417adb0633/files/898ffe4d-b11d-4ad9-8d82-1d34a1cca3cd.jpg',
      title: 'Набор "Первые шаги"',
      description: 'Колода Таро, свечи, благовония',
      price: '2500 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/a7bb806e-3df1-414a-bd5f-db417adb0633/files/898ffe4d-b11d-4ad9-8d82-1d34a1cca3cd.jpg',
      title: 'Кристаллы силы',
      description: 'Аметист, розовый кварц, цитрин',
      price: '1800 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/a7bb806e-3df1-414a-bd5f-db417adb0633/files/898ffe4d-b11d-4ad9-8d82-1d34a1cca3cd.jpg',
      title: 'Пентакль защиты',
      description: 'Ручная работа, серебро 925',
      price: '4200 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Консультация по Таро открыла мне глаза на многие вещи. Точность предсказаний поразила!',
      rating: 5
    },
    {
      name: 'Михаил В.',
      text: 'Астрологический прогноз помог принять важное решение. Благодарю за профессионализм!',
      rating: 5
    },
    {
      name: 'Елена С.',
      text: 'Приобрела набор для начинающих. Качество отличное, все пришло с инструкциями.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <span className="text-2xl font-bold">Мистика</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О мастере</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Откройте дверь<br />в мир <span className="text-primary">магии</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональные эзотерические консультации и магические атрибуты для духовного развития
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline">
                  Каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/a7bb806e-3df1-414a-bd5f-db417adb0633/files/eb38e1bb-9277-4486-8a0f-c9a4df155315.jpg" 
                alt="Таро карты" 
                className="rounded-2xl shadow-2xl glow"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold glow-gold animate-float">
                Онлайн консультации
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите свой путь к познанию</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:scale-105 transition-transform cursor-pointer border-border/50 hover:border-primary/50 glow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <p className="text-accent font-semibold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Каталог магических атрибутов</h2>
            <p className="text-xl text-muted-foreground">Инструменты для вашей практики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:scale-105 transition-transform cursor-pointer glow">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <Button>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/a7bb806e-3df1-414a-bd5f-db417adb0633/files/dcfefb49-cd27-483b-a156-bccefec193fa.jpg" 
              alt="Мастер" 
              className="rounded-2xl shadow-2xl glow"
            />
            <div>
              <h2 className="text-5xl font-bold mb-6">О мастере</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Добро пожаловать! Меня зовут Алина, и я практикующий таролог и астролог с 15-летним опытом.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Моя миссия — помочь людям найти ответы на важные вопросы, раскрыть свой потенциал и обрести гармонию с собой и миром.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Я провела более 5000 консультаций и помогла сотням людей найти свой путь через древние практики и современные методы работы с энергией.
              </p>
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">лет практики</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">консультаций</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
              <Button size="lg" className="glow">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят люди</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Связаться со мной</h2>
            <p className="text-xl text-muted-foreground">Задайте вопрос или запишитесь на консультацию</p>
          </div>
          <Card className="glow">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Введите имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем запросе..." 
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full glow">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <span>mystic@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span>+7 (900) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                    <span>@mystic_tarot</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <span className="text-2xl font-bold">Мистика</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Эзотерические консультации и магические атрибуты
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}