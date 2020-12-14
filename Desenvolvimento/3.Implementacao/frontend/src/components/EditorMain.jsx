import Header from './EditorHeader'

import {
  Main,
  Content,
  Border,
  Container,
} from '../styles/components/EditorMain'

const EditorMain = (props) => (
  <>
    <Header {...props} />
    <Main className="content">
      <Content>
        <Border>
          <Container>
            {props.children}
          </Container>
        </Border>
      </Content>
    </Main>
  </>
)

export default EditorMain