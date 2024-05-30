import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
declare type CarouselApi = UseEmblaCarouselType[1];
declare type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
declare type CarouselOptions = UseCarouselParameters[0];
declare type CarouselPlugin = UseCarouselParameters[1];
declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<Pick<import("../components/button").ButtonProps & React.RefAttributes<HTMLButtonElement>, "key" | keyof import("../components/button").ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<Pick<import("../components/button").ButtonProps & React.RefAttributes<HTMLButtonElement>, "key" | keyof import("../components/button").ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };
