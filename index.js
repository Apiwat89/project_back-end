const express = require(`express`);
const Sequelize = require(`sequelize`);
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database', 'username', 'passwored', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'Database/DB.sqlite'
});

const account = sequelize.define('account', {
    id_account: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const chord = sequelize.define('chord', {
    id_chord: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chordname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    datachord: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const shop = sequelize.define('shop', {
    id_guitar: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    guitarname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const list = sequelize.define('list', {
    list: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_account: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_guitar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

sequelize.sync();

// TABLE -> account
app.get('/accounts', (req,res) => {
    account.findAll().then(accounts => {
        res.json(accounts);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/accounts/:id_account', (req,res) => {
    account.findByPk(req.params.id).then(account => {
        if (!account) {
            res.status(404).send('Account not found');
        } else {
            res.json(account);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/accounts', (req,res) => {
    account.create(req.body).then(accounts => {
        res.send(accounts);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put('/accounts/:id_account', (req,res) => {
    account.findByPk(req.params.id).then(account => {
        if (!account) {
            res.status(404).send('Account not found');
        } else {
            account.update(req.body).then(() => {
                res.send(account);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/accounts/:id_account', (req,res) => {
    account.findByPk(req.params.id).then(account => {
        if (!account) {
            res.status(404).send('Account not found');
        } else {
            account.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// TABLE -> chord
app.get('/chords', (req,res) => {
    chord.findAll().then(chords => {
        res.json(chords);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/chords/:id_chord', (req,res) => {
    chord.findByPk(req.params.id).then(chord => {
        if (!chord) {
            res.status(404).send('Chord not fount');
        } else {
            res.json(chord);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/chords', (req,res) => {
    chord.create(req.body).then(chords => {
        res.send(chords);
    }).catch(err => {
        res.status(500).send(err);
    });
})

app.put('/chords/:id_chord', (req,res) => {
    chord.findByPk(req.params.id).then(chord => {
        if (!chord) {
            res.status(404).send('Chord not fount');
        } else {
            chord.update(req.body).then(() => {
                res.send(chord);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/chords/:id_chord', (req,res) => {
    chord.findByPk(req.params.id).then(chord => {
        if (!chord) {
            res.status(404).send('Chord not fount');
        } else {
            chord.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// TABLE -> shop
app.get('/shops', (req,res) => {
    shop.findAll().then(shops => {
        res.json(shops);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/shops/:id_guitar', (req,res) => {
    shop.findByPk(req.params.id).then(shop => {
        if (!shop) {
            res.status(404).send('Shop not fount');
        } else {
            res.json(shop);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/shops', (req,res) => {
    shop.create(req.body).then(shops => {
        res.send(shops);
    }).catch(err => {
        res.status(500).send(err);
    });
})

app.put('/shops/:id_guitar', (req,res) => {
    shop.findByPk(req.params.id).then(shop => {
        if (!shop) {
            res.status(404).send('Shop not fount');
        } else {
            shop.update(req.body).then(() => {
                res.send(shop);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/shops/:id_guitar', (req,res) => {
    shop.findByPk(req.params.id).then(shop => {
        if (!shop) {
            res.status(404).send('Shop not fount');
        } else {
            shop.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// TABLE -> list
app.get('/lists', (req,res) => {
    list.findAll().then(lists => {
        res.json(lists);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/lists/:list', (req,res) => {
    list.findByPk(req.params.id).then(list => {
        if (!list) {
            res.status(404).send('List not fount');
        } else {
            res.json(list);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post('/lists', (req,res) => {
    list.create(req.body).then(lists => {
        res.send(lists);
    }).catch(err => {
        res.status(500).send(err);
    });
})

app.put('/lists/:list', (req,res) => {
    list.findByPk(req.params.id).then(list => {
        if (!list) {
            res.status(404).send('List not fount');
        } else {
            list.update(req.body).then(() => {
                res.send(list);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete('/lists/:list', (req,res) => {
    list.findByPk(req.params.id).then(list => {
        if (!list) {
            res.status(404).send('list not fount');
        } else {
            list.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));