const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    await interaction.reply(
      `サーバー名: ${interaction.guild.name}\nサーバーID: ${interaction.guild.id}\nサーバー人数: ${interaction.guild.memberCount}`
    );
  },
};
