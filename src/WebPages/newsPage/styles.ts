import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    max-width: 1280px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
`

export const Categories = styled.div`
    display: flex;
    margin-top: 20px;
`

export const StoryArea = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    width: 1070px;
    padding: 10px;
    margin: auto;
    margin-top: 40px;

    .storyContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
        cursor:pointer;

        p {
            margin: 0;
            color: #EEE;
        }
    }
`

export const StoryContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    cursor:pointer;

    p {
        margin: 0;
        color: #EEE;
    }
`