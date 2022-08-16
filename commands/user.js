const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  async execute(interaction) {
    await interaction.reply(
      `タグ: ${interaction.user.tag}\nID: ${interaction.user.id}\n作成日: ${interaction.user.createdAt}`
    );
  },
};
