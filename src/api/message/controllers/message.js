'use strict';

/**
 * message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) => ({
    async customAction(ctx) {
        try {
            ctx.body = 'ok';
        } catch (err) {
            ctx.body = err;
        }
    },

    async findMessagesByUsername(ctx) {
        try {
            const { username } = ctx.params; // Get username from request params
            if (!username) {
                return ctx.badRequest('Username is required');
            }

            console.log('Searching for user:', username); // Log username

            // Find the user by username
            const user = await strapi.db.query('plugin::users-permissions.user').findOne({
                where: { username },
            });

            if (!user) {
                console.log('User not found');
                return ctx.notFound('User not found');
            }

            console.log('User found:', user); // Log found user

            // Fetch messages for the found user
            const messages = await strapi.db.query('api::message.message').findMany({
                where: { users_permissions_user: user.id },
                populate: ['users_permissions_user'], // Populate user relation if needed
            });

            console.log('Messages found:', messages); // Log found messages

            return { data: messages };
        } catch (err) {
            console.error('Error fetching messages:', err); // Log error
            return ctx.internalServerError(err);
        }
    }
}));
