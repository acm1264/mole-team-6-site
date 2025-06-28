import styled from "styled-components";

export const GallerySection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ViewerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    width: 100%;
    gap: 1rem;
`;

export const ArrowButton = styled.button`
    background: ${({ theme }) => theme.colors.accent1};
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;

    &:hover {
        background: ${({ theme }) => theme.colors.accent2};
    }
`;

export const ImageSlide = styled.img<{ active: boolean }>`
    width: 600px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    transform: ${({ active }) => (active ? "scale(1)" : "scale(0.85)")};
    transition: opacity 0.3s, transform 0.3s;
`;

export const DotsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;

export const Dot = styled.button<{ active: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ active, theme }) =>
        active ? theme.colors.accent1 : theme.colors.accent4};
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: ${({ theme }) => theme.colors.accent2};
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(50, 50, 50, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
`;

export const ModalImage = styled.img`
    max-width: 90vw;
    max-height: 90vh;
    border: 4px solid #888;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    cursor: zoom-out;
    object-fit: contain;
`;
