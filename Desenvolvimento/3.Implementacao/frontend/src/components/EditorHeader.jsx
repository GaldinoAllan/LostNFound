import {
  Content,
  Container,
  HeaderTitle
} from '../styles/components/EditorHeader'

const EditorHeader = ({ title, subtitle }) => (
  <Content className="header">
    <Container>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <p className="lead text-muted">{subtitle}</p>
    </Container>
  </Content>
)

export default EditorHeader