import { Component } from '@angular/core';
import { MathLink } from 'src/app/models/MathLink';
import { MathTopic } from 'src/app/models/MathTopic';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
  animations: [
    trigger('mathLinkAnimation', [
      transition(':enter', [
        query(':enter', style({ top: '-5px', opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('200ms', style({ top: '0px', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class MathComponent {
  constructor(titleService: Title, metaService: Meta, configService: ConfigService) {
    const url = configService.getConfig()?.url;

    titleService.setTitle("@razumovsky_r (Petro Kolosov) -- Math");
    metaService.updateTag({property: "og:type", content: "profile"});
    metaService.updateTag({property: "og:title", content: "Mathematical articles of @razumovsky_r (Petro Kolosov)"});
    metaService.updateTag({property: "og:description", content: "Math research in binomial theorem, polynomials, binomial coefficients, pascal's triangle, faulhaber's formula and bertrand's postulate done by @razumovsky_r (Petro Kolosov)"});
    metaService.updateTag({property: "og:url", content: `${url}/math/`});
    metaService.updateTag({property: "og:image", content: `${url}/assets/img/razumovsky_site_card.png`});
  }

  public topics: MathTopic[] = [
    new MathTopic("A study on partial dynamic equation on time scales involving derivatives of polynomials", [
      new MathLink("Source", "https://github.com/kolosovpetro/AStudyOnDynamicEquations"),
      new MathLink("PDF", "https://archive.org/details/a-study-on-dynamic-equations"),
    ]),
    new MathTopic("On the link between binomial theorem and discrete convolution", [
      new MathLink("Source", "https://github.com/kolosovpetro/OnTheBinomialTheoremAndDiscreteConvolution"),
      new MathLink("PDF", "https://archive.org/details/on-the-binomial-theorem-and-discrete-convolution"),
    ]),
    new MathTopic("An unusual identity for odd-powers", [
      new MathLink("PDF", "https://archive.org/details/an-unusual-identity-for-odd-powers"),
      new MathLink("DOI", "https://doi.org/10.1017/mag.2022.129"),
    ]),
    new MathTopic("Another approach to get derivative of odd-power", [
      new MathLink("Source", "https://github.com/kolosovpetro/AnotherApproachToGetDerivativeOfOddPower"),
      new MathLink("HAL", "https://hal.science/hal-03833765"),
      new MathLink("PDF", "assets/pdf/AnotherApproachToGetDerivativeOfOddPower.pdf"),
    ]),
    new MathTopic("Polynomial identities involving Pascal's triangle rows", [
      new MathLink("Source", "https://github.com/kolosovpetro/PolynomialIdentitiesInvolvingPascalsTriangleRows"),
      new MathLink("HAL", "https://hal.science/hal-03674905"),
      new MathLink("PDF", "https://hal.archives-ouvertes.fr/hal-03674905"),
    ]),
    new MathTopic("On the Bertrand's postulate", [
      new MathLink("Source", "https://github.com/kolosovpetro/OnTheBertrandsPostulate"),
      new MathLink("PDF", "https://archive.org/details/on-the-bertrands-postulate"),
    ]),
    new MathTopic("RSA Encryption: Behind the scenes", [
      new MathLink("Source", "https://github.com/kolosovpetro/RSAEncryptionExplained"),
      new MathLink("PDF", "https://archive.org/details/rsa-encryption-behind-the-scenes"),
    ]),
    new MathTopic("Diffie-Hellman Key Exchange via REST", [
      new MathLink("Source", "https://github.com/kolosovpetro/DiffieHellmanKeyExchange"),
      new MathLink("PDF", "https://archive.org/details/diffie-hellman-key-exchange-via-rest"),
    ]),
  ]
}
