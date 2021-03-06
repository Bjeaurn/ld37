gn.hud = {};
gn.hud.opacity = Math.random();
var red = green = blue = '255';
gn.hud.draw = function() {
    if(gn.debug) {
        gn.handle.reset();
        gn.handle.text(gn.currentFps+'fps',3,16);
        gn.handle.text(Entity.instances.length+' elements',gn.canvas.ow-100, 16);
        var obj = gn.viewport.getTile(player.x, player.y);
        gn.handle.text(obj.x+','+obj.y,gn.canvas.ow-150, 16);
    }
    var health = gn.images.get('health');
    var width = Math.round((player.health / 100) * health.width);

    gn.handle.globalAlpha = 0.5;

    gn.handle.drawImage(health, 0, 0, width, health.height, player.x - 64, player.y - 40, width, health.height);

    gn.handle.globalAlpha = 1;

    gn.handle.text(player.health, (gn.canvas.ow/2), (gn.canvas.oh - 8));

    if(player.dead) {
        gn.handle.font = '24px Helvetica';

        gn.handle.text('YOU DIED!', (gn.canvas.ow/2)-40, (gn.canvas.oh / 2) - 32);
        gn.handle.text('You scored '+player.score+' points', (gn.canvas.ow/2)-90, (gn.canvas.oh / 2));

        gn.handle.font = '16px Helvetica';
        gn.handle.text('Send a screenshot to @Bjeaurn !', (gn.canvas.ow/2)-90, (gn.canvas.oh / 2) + 24);

        gn.handle.font = gn.handle.defaultFont;

    }

    var bullet = gn.images.get('bullet_case');
    if(player.bullets > 0) {
        for(var i = 0; i<player.bullets; i++) {
            gn.handle.draw(bullet, gn.canvas.ow - 16 - (9 * i), gn.canvas.oh - 24);
        }
    } else {
        gn.handle.text('Press R to reload!', gn.canvas.ow - 100, gn.canvas.oh - 8);
    }

    /*if(player.currentLevel==10 && player.maxLevel==10) {
        red = gn.hud.genColor(red);
        green = gn.hud.genColor(green);
        blue = gn.hud.genColor(blue);
        color = 'rgba('+red+','+green+','+blue+',1.0)';
    } else {
        color = 'white';
    }
    gn.handle.text(player.currentLevel+' / '+player.maxLevel, gn.canvas.ow-60, gn.canvas.oh-10, 'bold 16px Helvetica', color, '1.0');
    gn.handle.text('€ '+player.money, 5, gn.canvas.oh-10, 'bold 16px Helvetica');*/
}

gn.hud.genColor = function(current) {
    if(typeof current != 'undefined') {
        var tmp = Math.random();
        if(tmp<0.5) {
            current -= Math.round(tmp*5);
        } else {
            current += Math.round(tmp*5);
        }
        if(current<0||current>255) {
            current = 175;
        }
        return current;
    }
    return gn.round(Math.random() * 255);
}


/*
function () {
    var msg = 'Hello LD27! ('+gn.currentFps+' fps)';
    var width = gn.handle.measureText(msg);
    var tmp = Math.random();
    if(tmp<0.5) {
        gn.hud.opacity -= 0.1;
    } else {
        gn.hud.opacity += 0.1;
    }
    if(tmp>0.5) {
        gn.hud.color.r = gn.hud.genColor(gn.hud.color.r);
        gn.hud.color.g = gn.hud.genColor(gn.hud.color.g);
        gn.hud.color.b = gn.hud.genColor(gn.hud.color.b);
    }
    if(gn.hud.opacity<0||gn.hud.opacity>1) {
        gn.hud.opacity = 0.5;
    }
    var color = 'rgba('+gn.hud.color.r+', '+gn.hud.color.g+','+gn.hud.color.b+','+gn.hud.opacity+')';
    gn.handle.text(msg, gn.viewport.centerX-(width.width/2), 30, '18px Helvetica', color);
}

gn.hud.color = {};
gn.hud.color.r = gn.hud.genColor();
gn.hud.color.g = gn.hud.genColor();
gn.hud.color.b = gn.hud.genColor();

*/
