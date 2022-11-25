import styled from "styled-components";

export const NavSection = styled.section`
    background-color: #fff;
    text-align: center;
    padding: 1rem;
    height: 140px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* justify-content: center;
    align-items: center; */

    img {
        width: 7rem;
        height: 7rem;
    }
`

export const FooterSection = styled.section`
    background-color: #E6E6E6;
    padding: 1rem;
    text-align: center;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 1.8rem;
        span {
            font-weight: 700;
        }
    }
`


// Progress bar styling
export const ProgressSection = styled.section`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`


export const ProgressBar = styled.div`
    width: 600px;
    max-width: 90%;
    background-color: ${({ bg }) => bg || "#ddd"};
    border-radius: .8rem;

    display: flex;
`

export const DynamicProgress = styled.div`
    padding: 5px;
    background:  ${({ bg }) => bg || "#000"};
    border-radius: .8rem;
    width: ${({ width }) => `${width}%`};
`