import React from 'react';
import { css } from '@emotion/core';
import { theme } from '.~/styles';
import LinkButton from '~components/linkButton/linkButton';

const { fonts, colors } = theme;

const section = css`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;

    @media screen and (max-width: 900px) {
        padding: 0 4rem;
    }

    @media screen and (max-width: 600px) {
        padding: 0 2.5rem;
    }
`;

const header = css`
    font-family: ${fonts.primary};
    font-weight: normal;
    letter-spacing: 1rem;
    font-size: 5rem;
    margin-bottom: 1rem;
`;

const subText = css`
    width: 75vw;
    font-size: 1.6rem;
    line-height: 3rem;
    color: ${colors.grey};
`;

const Contact = () => {
    return (
        <section css={section} id='contact'>
            <h4
                css={header}
                data-aos='fade-up'
                data-aos-duration='350'
                data-aos-delay='500'
                >
                Get in touch
            </h4>
            <p
                css={subText}
                data-aos='fade-up'
                data-aos-duration='350'
                data-aos-delay='500'
                >
                I am available to any freelance work at the moment.
             I am always happy to consider new ideas or collaborations.
             Even just to have a chat about a new technology!
             </p>
             <LinkButton
                to='mailto:dumitruflorin19@yahoo.com?subject=Get%20in%20Touch%20florin-dumitru.co.uk'
                data-aos='fade-up'
                data-aos-duration='350'
                data-aos-delay='500'
                >
                    Contact me
             </LinkButton>
        </section>
    );
};

export default Contact;