import styled from "styled-components";

const InteractiveText = styled.span`
  margin-left: 3px;
  cursor: pointer;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: rgb(138, 139, 130);
  }
`;
const InteractiveTextFooter = styled.span`
  margin-left: 3px;
  cursor: pointer;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: rgb(87, 90, 77);
  }
`;
export { InteractiveText, InteractiveTextFooter };
