use elixor::sockets::{SocketProtocol, SocketServer};

fn main() {
    let mut server = SocketServer::new("localhost", 8080);
    
    if let Err(error) = server.bind() {
        println!("Failed {}", error.reason);
    }
}
