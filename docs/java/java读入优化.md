# Java 读入优化

## 极致优化

~~~java
 private static class FastScanner {
        final private int BUFFER_SIZE = 1 << 16;
        private DataInputStream din;
        private byte[] buffer;
        private int bufferPointer, bytesRead;

        private FastScanner() throws IOException {
            din = new DataInputStream(System.in);
            buffer = new byte[BUFFER_SIZE];
            bufferPointer = bytesRead = 0;
        }

        private short nextShort() throws IOException {
            short ret = 0;
            byte c = read();
            while (c <= ' ') c = read();
            boolean neg = (c == '-');
            if (neg) c = read();
            do ret = (short) (ret * 10 + c - '0');
            while ((c = read()) >= '0' && c <= '9');
            if (neg) return (short) -ret;
            return ret;
        }

        private int nextInt() throws IOException {
            int ret = 0;
            byte c = read();
            while (c <= ' ') c = read();
            boolean neg = (c == '-');
            if (neg) c = read();
            do ret = ret * 10 + c - '0';
            while ((c = read()) >= '0' && c <= '9');
            if (neg) return -ret;
            return ret;
        }

        public long nextLong() throws IOException {
            long ret = 0;
            byte c = read();
            while (c <= ' ') c = read();
            boolean neg = (c == '-');
            if (neg) c = read();
            do ret = ret * 10 + c - '0';
            while ((c = read()) >= '0' && c <= '9');
            if (neg) return -ret;
            return ret;
        }

        private char nextChar() throws IOException {
            byte c = read();
            while (c <= ' ') c = read();
            return (char) c;
        }

        private String nextString() throws IOException {
            StringBuilder ret = new StringBuilder();
            byte c = read();
            while (c <= ' ') c = read();
            do {
                ret.append((char) c);
            } while ((c = read()) > ' ');
            return ret.toString();
        }

        private void fillBuffer() throws IOException {
            bytesRead = din.read(buffer, bufferPointer = 0, BUFFER_SIZE);
            if (bytesRead == -1) buffer[0] = -1;
        }

        private byte read() throws IOException {
            if (bufferPointer == bytesRead) fillBuffer();
            return buffer[bufferPointer++];
        }
    }
~~~



## 普通优化

~~~java
static class InputReader {
        public BufferedReader Reader;
        public StringTokenizer tokenizer;

        public InputReader(InputStream stream) {
            Reader = new BufferedReader(new InputStreamReader(stream), 32768);
            tokenizer = null;
        }
        public String nextLine() {
            String s = "";
            try {
                s = Reader.readLine();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return s;
        }
        public String next() {
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(Reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int nextInt() {
            return Integer.parseInt(next());
        }

        public long nextLong() {
            return Long.parseLong(next());
        }

        public float nextFloat() {
            return Float.parseFloat(next());
        }

        public double nextDouble() {
            return Double.parseDouble(next());
        }
    }

    static InputReader in = new InputReader(System.in);
    static PrintWriter out = new PrintWriter(System.out);
~~~

### 注意

~~~java
import java.io.*;
import java.util.*;//普通优化需要导入
~~~



