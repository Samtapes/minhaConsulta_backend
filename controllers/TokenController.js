const jwt = require('jsonwebtoken');
const JWT_SECRET = 'seu-segredo-aqui';


// Middleware para autenticar o token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token após 'Bearer '

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  console.log('Token recebido:', token);


  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Erro ao verificar o token:', err.message);
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.userId = decoded.id; // Armazena o userId no objeto req
    req.role = decoded.role; // Armazena o userId no objeto req
    next();
  });
}


module.exports = authenticateToken;