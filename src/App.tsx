import React from 'react';
import ReactDOM from 'react-dom';

// type CounterState = {
//   count: number,
// }

// type CounterProps = {
//   // readonly title?: string,
//   title?: string,
// }

// class Counter extends React.Component<CounterProps, CounterState> {
//   constructor(props: CounterProps) {
//     super(props);
//     this.state = {
//       count: 0,
//     }
//   }

//   static defaultProps: CounterProps = {
//     title: "Default counter: ",
//   }

//   static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
//     return true ? { count: 2 } : null;
//   }

//   componentDidMount(): void {

//   }

//   shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
//     return true;
//   }
 
//   handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>) => {
//     console.log(`${e.clientX}, ${e.clientY}`);
//     this.setState(({ count }) => ({
//       count: ++count,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//         <p onClick={this.handleClick}>Text</p>
//       </div>
//     );
//   }
// }

// const App = () => <Counter title="Counter: " />

// type TitleProps = {
//   title: string,
//   test?: string,
// }
// const Title = ({ title, test='Wow' }: TitleProps) => <h1>{title}</h1>;

// const App = () => <Title title="Hello World" />;

// class Form extends React.Component<{}, {}> {
//   handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget);
//   }

//   handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Submitted!');
//   }

//   handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     console.log('Coppied!');
//   }

//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//       >
//         <label>Simple text:
//           <input
//             onFocus={this.handleFocus}
//             onCopy={this.handleCopy}
//             type="text"
//             name="text"
//           />
//         </label>
//         <button
//           type="submit"
//         >
//           submit
//         </button>
//       </form>
//     );
//   }
// }

type Position = {
  id: string,
  value: string,
  title: string,
}

type FormState = {
  inputText: string,
    textareaText : string,
    selectText: string,
    showData: {
      name: string,
      text: string,
      position: string,
    }
}

const POSITIONS: Array<Position> = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  },
];

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' };

class Form extends React.Component<{}, FormState> {

  state = {
    inputText: '',
    textareaText : '',
    selectText: DEFAULT_SELECT_VALUE,
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  private rootRef = React.createRef<HTMLSelectElement>();

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value: inputText } } = e;
    this.setState({ inputText });
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    this.setState({ textareaText });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target: { value: selectText } } = e;
    this.setState({ selectText });
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    });
  }

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>

          <label style={styles}>
            Text:
            <textarea
              value={textareaText}
              onChange={this.handleTextareaChange}
            />
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option
                key={id}
                value={value}
              >{title}</option>
            ))}
          </select>

          <button onClick={this.handleShow}>Show Data</button>
        </form>

        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

const App = () => <Form />;

// type PortalProps = {
//   cildren: React.ReactNode,
// }

// class Portal extends React.Component<PortalProps> {
//   private el: HTMLDivElement = document.createElement('div');

//   public componentDidMount(): void {

//   }

//   public componentWillUnmount(): void {

//   }

//   public render(): React.ReactElement<PortalProps> {
//     return ReactDOM.createPortal(this.props.children, this.el);
//   }
// }

export default App;
