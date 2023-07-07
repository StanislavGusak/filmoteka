import styled from 'styled-components';

export const InfoActorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ActorInfoMain = styled.div`
  width: 50%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background: var(--background-header);
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ActorInfoImg = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ActorsDetalis = styled.div`
  width: 50%;
  overflow-wrap: break-word;
  border-radius: 5px;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ActorsInfoName = styled.h3`
  color: var(--border-color);
  font-size: 37px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ActorsInfoBirth = styled.p`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;
  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ActorsInfoDepartment = styled.p`
  font-size: 21px;
  margin-bottom: 15px;
  color: var(--color);
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ActorsPlaceOfBirth = styled.p`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;
  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ActorsPopularity = styled.div`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;
  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Biography = styled.p`
  color: var(--color);
  font-size: 21px;
  line-height: 25px;
  text-align: center;
`;

export const BtnReadMore = styled.button`
  color: var(--border-color);
  font-size: 21px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;