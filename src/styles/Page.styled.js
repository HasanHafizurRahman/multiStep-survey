import styled from "styled-components";

export const Container = styled.section`
    min-height: calc(100vh - 210px);
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        text-align: center;
        font-size: 2.6rem;
    }


    .card_container {
        display: flex;
        gap: 10rem;

        .card {
            flex-basis: 33%;
            background-color: #fff;
            box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15);
            text-align: center;
            padding: 5rem;
            border-radius: .8rem;
            cursor: pointer;
            img {
                width: 5rem;
                height: 5rem;
            }

            p {
                font-size: 2rem;
                margin-top: 1rem;
            }
        }

        input {
            width: 500px;
            margin: 0 auto;
            border: 2px solid #000;
            padding: 1rem;
            border-radius: .8rem;

            :focus {
                outline: none;
            }
        }
    }

    .btn_container {
        display: flex;
        justify-content: center;
        gap: 4rem;
        align-items: center;

        button {
            background-color: #fff;
            border: 3px solid #000;
            padding: 1rem 2rem;
            border-radius: .8rem;
            cursor: pointer;
            transition: all .5s;

            :hover {
                background-color: #000;
                color: #fff;
            }
        }
    }


    .preview_card {
        background-color: #ddd;
        padding: 3rem;
        width: 600px;
        max-width: 80%;
        margin: 0 auto;

        p {
            font-size: 1.8rem;
            text-align: center;

            span {
                font-weight: 800;
            }
        }
    }
`